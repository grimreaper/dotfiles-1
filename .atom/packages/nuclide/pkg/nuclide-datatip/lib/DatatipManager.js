'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatatipManager = undefined;

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

let getTopDatatipAndProvider = (() => {
  var _ref3 = (0, _asyncToGenerator.default)(function* (providers, editor, position, invoke) {
    const { scopeName } = editor.getGrammar();
    const filteredDatatipProviders = filterProvidersByScopeName(providers, scopeName);
    if (filteredDatatipProviders.length === 0) {
      return null;
    }

    const datatipPromises = providers.map((() => {
      var _ref4 = (0, _asyncToGenerator.default)(function* (provider) {
        const name = getProviderName(provider);
        const timingTracker = new (_analytics || _load_analytics()).default.TimingTracker(name + '.datatip');
        try {
          const datatip = yield invoke(provider);
          if (!datatip) {
            return null;
          }

          timingTracker.onSuccess();

          return {
            datatip,
            provider
          };
        } catch (e) {
          timingTracker.onError(e);
          logger.error(`Error getting datatip from provider ${name}`, e);
          return null;
        }
      });

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    })());

    return (0, (_promise || _load_promise()).asyncFind)(datatipPromises, function (p) {
      return p;
    });
  });

  return function getTopDatatipAndProvider(_x, _x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
})();

var _analytics;

function _load_analytics() {
  return _analytics = _interopRequireDefault(require('nuclide-commons-atom/analytics'));
}

var _debounce;

function _load_debounce() {
  return _debounce = _interopRequireDefault(require('nuclide-commons/debounce'));
}

var _featureConfig;

function _load_featureConfig() {
  return _featureConfig = _interopRequireDefault(require('nuclide-commons-atom/feature-config'));
}

var _idx;

function _load_idx() {
  return _idx = _interopRequireDefault(require('idx'));
}

var _immutable;

function _load_immutable() {
  return _immutable = _interopRequireDefault(require('immutable'));
}

var _react = _interopRequireDefault(require('react'));

var _reactDom = _interopRequireDefault(require('react-dom'));

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('nuclide-commons/UniversalDisposable'));
}

var _collection;

function _load_collection() {
  return _collection = require('nuclide-commons/collection');
}

var _promise;

function _load_promise() {
  return _promise = require('nuclide-commons/promise');
}

var _log4js;

function _load_log4js() {
  return _log4js = require('log4js');
}

var _textEditor;

function _load_textEditor() {
  return _textEditor = require('nuclide-commons-atom/text-editor');
}

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _getModifierKeys;

function _load_getModifierKeys() {
  return _getModifierKeys = require('./getModifierKeys');
}

var _performanceNow;

function _load_performanceNow() {
  return _performanceNow = _interopRequireDefault(require('../../commons-node/performanceNow'));
}

var _DatatipComponent;

function _load_DatatipComponent() {
  return _DatatipComponent = require('./DatatipComponent');
}

var _PinnedDatatip;

function _load_PinnedDatatip() {
  return _PinnedDatatip = require('./PinnedDatatip');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

/* global performance */

const logger = (0, (_log4js || _load_log4js()).getLogger)('nuclide-datatip');

const CUMULATIVE_WHEELX_THRESHOLD = 20;
const DEFAULT_DATATIP_DEBOUNCE_DELAY = 1000;
const DEFAULT_DATATIP_INTERACTED_DEBOUNCE_DELAY = 1000;

function getProviderName(provider) {
  if (provider.providerName == null) {
    logger.error('Datatip provider has no name', provider);
    return 'unknown';
  }
  return provider.providerName;
}

function filterProvidersByScopeName(providers, scopeName) {
  return providers.filter(provider => provider.inclusionPriority > 0 && provider.validForScope(scopeName)).sort((providerA, providerB) => providerB.inclusionPriority - providerA.inclusionPriority);
}

function getBufferPosition(editor, editorView, event) {
  if (!event) {
    return null;
  }

  const text = editorView.component;
  if (!text) {
    return null;
  }

  const screenPosition = text.screenPositionForMouseEvent(event);
  const pixelPosition = text.pixelPositionForMouseEvent(event);
  const pixelPositionFromScreenPosition = text.pixelPositionForScreenPosition(screenPosition);
  // Distance (in pixels) between screenPosition and the cursor.
  const horizontalDistance = pixelPosition.left - pixelPositionFromScreenPosition.left;
  // `screenPositionForMouseEvent.column` cannot exceed the current line length.
  // This is essentially a heuristic for "mouse cursor is to the left or right
  // of text content".
  if (pixelPosition.left < 0 || horizontalDistance > editor.getDefaultCharWidth()) {
    return null;
  }
  return editor.bufferPositionForScreenPosition(screenPosition);
}

function PinnableDatatip({
  datatip,
  editor,
  onPinClick
}) {
  let action;
  let actionTitle;
  // Datatips are pinnable by default, unless explicitly specified
  // otherwise.
  if (datatip.pinnable !== false) {
    action = (_DatatipComponent || _load_DatatipComponent()).DATATIP_ACTIONS.PIN;
    actionTitle = 'Pin this Datatip';
  }

  return _react.default.createElement((_DatatipComponent || _load_DatatipComponent()).DatatipComponent, {
    action: action,
    actionTitle: actionTitle,
    datatip: datatip,
    onActionClick: () => onPinClick(editor, datatip)
  });
}

function mountDatatipWithMarker(editor, element, {
  range,
  renderedProviders
}) {
  // Transform the matched element range to the hint range.
  const marker = editor.markBufferRange(range, {
    invalidate: 'never'
  });

  _reactDom.default.render(renderedProviders, element);
  element.style.display = 'block';

  editor.decorateMarker(marker, {
    type: 'overlay',
    position: 'tail',
    item: element
  });

  editor.decorateMarker(marker, {
    type: 'highlight',
    class: 'nuclide-datatip-highlight-region'
  });

  return marker;
}

const DatatipState = Object.freeze({
  HIDDEN: 'HIDDEN',
  FETCHING: 'FETCHING',
  VISIBLE: 'VISIBLE'
});


function ensurePositiveNumber(value, defaultValue) {
  if (typeof value !== 'number' || value < 0) {
    return defaultValue;
  }
  return value;
}

class DatatipManagerForEditor {

  constructor(editor, datatipProviders, modifierDatatipProviders) {
    _initialiseProps.call(this);

    this._editor = editor;
    this._editorView = atom.views.getView(editor);
    this._pinnedDatatips = new Set();
    this._subscriptions = new (_UniversalDisposable || _load_UniversalDisposable()).default();
    this._datatipProviders = datatipProviders;
    this._modifierDatatipProviders = modifierDatatipProviders;
    this._datatipElement = document.createElement('div');
    this._datatipElement.className = 'nuclide-datatip-overlay';
    this._datatipState = DatatipState.HIDDEN;
    this._heldKeys = new (_immutable || _load_immutable()).default.Set();
    this._interactedWith = false;
    this._cumulativeWheelX = 0;
    this._lastHiddenTime = 0;
    this._lastFetchedFromCursorPosition = false;
    this._shouldDropNextMouseMoveAfterFocus = false;

    this._subscriptions.add((_featureConfig || _load_featureConfig()).default.observe('nuclide-datatip.datatipDebounceDelay', () => this._setStartFetchingDebounce()), (_featureConfig || _load_featureConfig()).default.observe('nuclide-datatip.datatipInteractedWithDebounceDelay', () => this._setHideIfOutsideDebounce()), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'focus').subscribe(e => {
      this._shouldDropNextMouseMoveAfterFocus = true;
      if (!this._insideDatatip) {
        this._setState(DatatipState.HIDDEN);
      }
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'blur').subscribe(e => {
      if (!this._insideDatatip) {
        this._setState(DatatipState.HIDDEN);
      }
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'mousemove').subscribe(e => {
      this._lastFetchedFromCursorPosition = false;
      if (this._shouldDropNextMouseMoveAfterFocus) {
        this._shouldDropNextMouseMoveAfterFocus = false;
        return;
      }

      this._lastMoveEvent = e;
      this._heldKeys = (0, (_getModifierKeys || _load_getModifierKeys()).getModifierKeysFromMouseEvent)(e);
      if (this._datatipState === DatatipState.HIDDEN) {
        this._startFetchingDebounce();
      } else {
        this._hideIfOutside();
      }
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'mouseleave').subscribe(() => {
      this._lastMoveEvent = null;
      this._hideIfOutside();
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'mousedown').subscribe(e => {
      let node = e.target;
      while (node !== null) {
        if (node === this._datatipElement) {
          return;
        }
        node = node.parentNode;
      }

      this._hideOrCancel();
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'keydown').subscribe(e => {
      const modifierKey = (0, (_getModifierKeys || _load_getModifierKeys()).getModifierKeyFromKeyboardEvent)(e);
      if (modifierKey) {
        this._heldKeys = this._heldKeys.add(modifierKey);
        if (this._datatipState !== DatatipState.HIDDEN) {
          this._fetchInResponseToKeyPress();
        }
      } else {
        this._hideOrCancel();
      }
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._editorView, 'keyup').subscribe(e => {
      const modifierKey = (0, (_getModifierKeys || _load_getModifierKeys()).getModifierKeyFromKeyboardEvent)(e);
      if (modifierKey) {
        this._heldKeys = this._heldKeys.delete(modifierKey);
        if (this._datatipState !== DatatipState.HIDDEN) {
          this._fetchInResponseToKeyPress();
        }
      }
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._datatipElement, 'wheel').subscribe(e => {
      this._cumulativeWheelX += Math.abs(e.deltaX);
      if (this._cumulativeWheelX > CUMULATIVE_WHEELX_THRESHOLD) {
        this._interactedWith = true;
      }
      if (this._interactedWith) {
        e.stopPropagation();
      }
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._datatipElement, 'mousedown').subscribe(() => {
      this._interactedWith = true;
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._datatipElement, 'mouseenter').subscribe(() => {
      this._insideDatatip = true;
      this._hideIfOutside();
    }), _rxjsBundlesRxMinJs.Observable.fromEvent(this._datatipElement, 'mouseleave').subscribe(() => {
      this._insideDatatip = false;
      this._hideIfOutside();
    }), this._editorView.onDidChangeScrollTop(() => {
      this._lastMoveEvent = null;
      if (this._datatipState === DatatipState.VISIBLE) {
        this._setState(DatatipState.HIDDEN);
      }
    }), atom.commands.add('atom-text-editor', 'nuclide-datatip:toggle', this._toggleDatatip));
  }

  _fetchInResponseToKeyPress() {
    if (this._lastFetchedFromCursorPosition) {
      this._startFetching(() => this._editor.getCursorBufferPosition());
    } else {
      this._startFetching(() => getBufferPosition(this._editor, this._editorView, this._lastMoveEvent));
    }
  }

  _setStartFetchingDebounce() {
    this._startFetchingDebounce = (0, (_debounce || _load_debounce()).default)(() => {
      this._startFetching(() => getBufferPosition(this._editor, this._editorView, this._lastMoveEvent));
    }, ensurePositiveNumber((_featureConfig || _load_featureConfig()).default.get('nuclide-datatip.datatipDebounceDelay'), DEFAULT_DATATIP_DEBOUNCE_DELAY),
    /* immediate */false);
  }

  _setHideIfOutsideDebounce() {
    this._hideIfOutsideDebounce = (0, (_debounce || _load_debounce()).default)(() => {
      this._hideIfOutsideImmediate();
    }, ensurePositiveNumber((_featureConfig || _load_featureConfig()).default.get('nuclide-datatip.datatipInteractedWithDebounceDelay'), DEFAULT_DATATIP_INTERACTED_DEBOUNCE_DELAY),
    /* immediate */false);
  }

  dispose() {
    this._setState(DatatipState.HIDDEN);
    this._subscriptions.dispose();
    this._datatipElement.remove();
  }

  _setState(newState) {
    const oldState = this._datatipState;
    this._datatipState = newState;

    if (newState === DatatipState.HIDDEN) {
      this._blacklistedPosition = null;
      if (oldState !== DatatipState.HIDDEN) {
        this._hideDatatip();
      }
    }
  }

  _startFetching(getPosition) {
    var _this = this;

    return (0, _asyncToGenerator.default)(function* () {
      const position = getPosition();
      if (!position) {
        return;
      }

      _this._setState(DatatipState.FETCHING);

      const data = yield _this._fetchAndRender(position);
      if (data == null) {
        _this._setState(DatatipState.HIDDEN);
        return;
      }
      if (_this._datatipState !== DatatipState.FETCHING) {
        _this._setState(DatatipState.HIDDEN);
      }

      if (_this._blacklistedPosition && data.range && data.range.containsPoint(_this._blacklistedPosition)) {
        _this._setState(DatatipState.HIDDEN);
        return;
      }

      const currentPosition = getPosition();
      if (!currentPosition || !data.range || !data.range.containsPoint(currentPosition)) {
        _this._setState(DatatipState.HIDDEN);
        return;
      }

      if (_this._isHoveringOverPinnedTip()) {
        _this._setState(DatatipState.HIDDEN);
        return;
      }

      _this._setState(DatatipState.VISIBLE);
      _this._interactedWith = false;
      _this._cumulativeWheelX = 0;
      _this._range = data.range;

      if (_this._marker) {
        _this._marker.destroy();
      }
      _this._marker = mountDatatipWithMarker(_this._editor, _this._datatipElement, data);
    })();
  }

  _fetchAndRender(position) {
    var _this2 = this;

    return (0, _asyncToGenerator.default)(function* () {
      let datatipAndProviderPromise;
      if (_this2._lastPosition && position.isEqual(_this2._lastPosition)) {
        datatipAndProviderPromise = _this2._lastDatatipAndProviderPromise;
      } else {
        _this2._lastDatatipAndProviderPromise = getTopDatatipAndProvider(_this2._datatipProviders, _this2._editor, position, function (provider) {
          return provider.datatip(_this2._editor, position);
        });
        datatipAndProviderPromise = _this2._lastDatatipAndProviderPromise;
        _this2._lastPosition = position;
      }

      const datatipsAndProviders = (0, (_collection || _load_collection()).arrayCompact)((yield Promise.all([datatipAndProviderPromise, getTopDatatipAndProvider(_this2._modifierDatatipProviders, _this2._editor, position, function (provider) {
        return provider.modifierDatatip(_this2._editor, position, _this2._heldKeys);
      })])));

      if (datatipsAndProviders.length === 0) {
        return null;
      }

      const range = datatipsAndProviders[0].datatip.range;
      (_analytics || _load_analytics()).default.track('datatip-popup', {
        scope: _this2._editor.getGrammar().scopeName,
        providerName: getProviderName(datatipsAndProviders[0].provider),
        rangeStartRow: String(range.start.row),
        rangeStartColumn: String(range.start.column),
        rangeEndRow: String(range.end.row),
        rangeEndColumn: String(range.end.column)
      });

      const renderedProviders = _react.default.createElement(
        'div',
        null,
        datatipsAndProviders.map(function ({ datatip, provider }) {
          return _react.default.createElement(PinnableDatatip, {
            datatip: datatip,
            editor: _this2._editor,
            key: getProviderName(provider),
            onPinClick: _this2._handlePinClicked
          });
        })
      );

      return {
        range,
        renderedProviders
      };
    })();
  }

  _isHoveringOverPinnedTip() {
    const pinnedDataTips = Array.from(this._pinnedDatatips.values());
    const hoveringTips = pinnedDataTips.filter(dt => dt.isHovering());
    return hoveringTips != null && hoveringTips.length > 0;
  }

  _hideDatatip() {
    this._lastHiddenTime = performance.now();
    if (this._marker) {
      this._marker.destroy();
      this._marker = null;
    }
    this._range = null;
    _reactDom.default.unmountComponentAtNode(this._datatipElement);
    this._datatipElement.style.display = 'none';
  }

  _hideOrCancel() {
    if (this._datatipState === DatatipState.HIDDEN || this._datatipState === DatatipState.FETCHING) {
      this._blacklistedPosition = getBufferPosition(this._editor, this._editorView, this._lastMoveEvent);
      return;
    }

    this._setState(DatatipState.HIDDEN);
  }

  _hideIfOutside() {
    if (this._datatipState !== DatatipState.VISIBLE) {
      return;
    }

    if (this._interactedWith) {
      this._hideIfOutsideDebounce();
    } else {
      this._hideIfOutsideImmediate();
    }
  }

  _hideIfOutsideImmediate() {
    if (this._datatipState !== DatatipState.VISIBLE) {
      return;
    }
    if (this._insideDatatip) {
      return;
    }

    if (this._isHoveringOverPinnedTip()) {
      this._setState(DatatipState.HIDDEN);
      return;
    }

    const currentPosition = getBufferPosition(this._editor, this._editorView, this._lastMoveEvent);
    if (currentPosition && this._range && this._range.containsPoint(currentPosition)) {
      return;
    }

    this._setState(DatatipState.HIDDEN);
  }

  createPinnedDataTip(datatip, editor) {
    const pinnedDatatip = new (_PinnedDatatip || _load_PinnedDatatip()).PinnedDatatip(datatip, editor,
    /* onDispose */() => {
      this._pinnedDatatips.delete(pinnedDatatip);
    },
    /* hideDataTips */() => {
      this._hideDatatip();
    });
    return pinnedDatatip;
  }

}

var _initialiseProps = function () {
  this._handlePinClicked = (editor, datatip) => {
    (_analytics || _load_analytics()).default.track('datatip-pinned-open');
    const startTime = (0, (_performanceNow || _load_performanceNow()).default)();
    this._setState(DatatipState.HIDDEN);
    this._pinnedDatatips.add(new (_PinnedDatatip || _load_PinnedDatatip()).PinnedDatatip(datatip, editor,
    /* onDispose */pinnedDatatip => {
      this._pinnedDatatips.delete(pinnedDatatip);
      (_analytics || _load_analytics()).default.track('datatip-pinned-close', {
        duration: (0, (_performanceNow || _load_performanceNow()).default)() - startTime
      });
    },
    /* hideDataTips */() => {
      this._hideDatatip();
    }));
  };

  this._toggleDatatip = e => {
    var _ref, _ref2;

    if (atom.workspace.getActiveTextEditor() !== this._editor) {
      return;
    }

    // Note that we don't need to hide the tooltip, we already hide it on
    // keydown, which is going to be triggered before the key binding which is
    // evaluated on keyup.
    const maybeEventType = (_ref = e) != null ? (_ref2 = _ref.originalEvent) != null ? _ref2.type : _ref2 : _ref;

    // Unfortunately, when you do keydown of the shortcut, it's going to
    // hide it, we need to make sure that when we do keyup, it doesn't show
    // it up right away. We assume that a keypress is done within 100ms
    // and don't show it again if it was hidden so soon.
    const forceShow = maybeEventType === 'keydown' && performance.now() - this._lastHiddenTime > 100;
    const forceHide = maybeEventType === 'keyup';
    const forceToggle = maybeEventType !== 'keydown' && maybeEventType !== 'keyup';

    if (
    // if we have event information, prefer that for determining show/hide
    forceShow || forceToggle && this._datatipState === DatatipState.HIDDEN) {
      this._lastFetchedFromCursorPosition = true;
      this._startFetching(() => this._editor.getCursorScreenPosition());
    } else if (forceHide || forceToggle) {
      this._hideOrCancel();
    }
  };
};

class DatatipManager {

  constructor() {
    this._subscriptions = new (_UniversalDisposable || _load_UniversalDisposable()).default();
    this._editorManagers = new Map();
    this._datatipProviders = [];
    this._modifierDatatipProviders = [];

    this._subscriptions.add((0, (_textEditor || _load_textEditor()).observeTextEditors)(editor => {
      const manager = new DatatipManagerForEditor(editor, this._datatipProviders, this._modifierDatatipProviders);
      this._editorManagers.set(editor, manager);
      const dispose = () => {
        manager.dispose();
        this._editorManagers.delete(editor);
      };
      this._subscriptions.add(new (_UniversalDisposable || _load_UniversalDisposable()).default(dispose));
      editor.onDidDestroy(dispose);
    }));
  }

  addProvider(provider) {
    this._datatipProviders.push(provider);
    return new (_UniversalDisposable || _load_UniversalDisposable()).default(() => {
      (0, (_collection || _load_collection()).arrayRemove)(this._datatipProviders, provider);
    });
  }

  addModifierProvider(provider) {
    this._modifierDatatipProviders.push(provider);
    return new (_UniversalDisposable || _load_UniversalDisposable()).default(() => {
      (0, (_collection || _load_collection()).arrayRemove)(this._modifierDatatipProviders, provider);
    });
  }

  createPinnedDataTip(datatip, editor) {
    const manager = this._editorManagers.get(editor);
    if (!manager) {
      throw new Error('Trying to create a pinned data tip on an editor that has ' + 'no datatip manager');
    }
    return manager.createPinnedDataTip(datatip, editor);
  }

  dispose() {
    this._subscriptions.dispose();
    this._editorManagers.forEach(manager => {
      manager.dispose();
    });
    this._editorManagers = new Map();
  }
}
exports.DatatipManager = DatatipManager;