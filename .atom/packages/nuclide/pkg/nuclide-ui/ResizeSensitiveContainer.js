'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeSensitiveContainer = undefined;

var _react = _interopRequireDefault(require('react'));

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _observable;

function _load_observable() {
  return _observable = require('nuclide-commons/observable');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EXPANSION_BUFFER = 50;

/**
 * Hidden set of DOM nodes that are used to detect resizes through onScroll events.
 *
 * This component works by injecting two sets of divs, one for detecting expansions
 * and one for detecting shrinking. They are sized and have their scroll positions
 * set in a specific way so that a resize of the container will trigger an onScroll
 * event. This is used as the basis for the "onResize" event.
 *
 * The scroll position of the inner divs can be reset when DOM nodes are shuffled
 * around, which will break the resize detection. To handle this case, the sensor
 * uses a CSS animation and listens for onAnimationStart to know when to reset the
 * scroll positions.
 *
 * This strategy is derived from https://github.com/wnr/element-resize-detector
 */
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

class ResizeSensor extends _react.default.Component {

  constructor(props) {
    super(props);
    this._handleScroll = this._handleScroll.bind(this);
    this._handleExpandRef = this._handleExpandRef.bind(this);
    this._handleShrinkRef = this._handleShrinkRef.bind(this);
  }

  componentDidMount() {
    this._resetScrollbars();
  }

  componentDidUpdate(prevProps) {
    const { targetWidth, targetHeight } = this.props;
    if (prevProps.targetWidth !== targetWidth || prevProps.targetHeight !== targetHeight) {
      this._resetScrollbars();
    }
  }

  _resetScrollbars() {
    if (this._expand == null || this._shrink == null) {
      return;
    }

    this._expand.scrollLeft = this._expand.scrollWidth;
    this._expand.scrollTop = this._expand.scrollHeight;

    this._shrink.scrollLeft = this._shrink.scrollWidth;
    this._shrink.scrollTop = this._shrink.scrollHeight;
  }

  _handleScroll() {
    this._resetScrollbars();
    this.props.onDetectedResize();
  }

  _handleExpandRef(el) {
    this._expand = el;
  }

  _handleShrinkRef(el) {
    this._shrink = el;
  }

  render() {
    const { targetWidth, targetHeight } = this.props;
    const expandInnerStyle = {
      width: targetWidth + EXPANSION_BUFFER,
      height: targetHeight + EXPANSION_BUFFER
    };

    return _react.default.createElement(
      'div',
      {
        className: 'nuclide-resize-sensitive-container-sensor',
        onAnimationStart: this._handleScroll },
      _react.default.createElement(
        'div',
        {
          ref: this._handleExpandRef,
          className: 'nuclide-resize-sensitive-container-expand',
          onScroll: this._handleScroll },
        _react.default.createElement('div', {
          className: 'nuclide-resize-sensitive-container-expand-inner',
          style: expandInnerStyle
        })
      ),
      _react.default.createElement(
        'div',
        {
          ref: this._handleShrinkRef,
          className: 'nuclide-resize-sensitive-container-shrink',
          onScroll: this._handleScroll },
        _react.default.createElement('div', { className: 'nuclide-resize-sensitive-container-shrink-inner' })
      )
    );
  }
}

/**
 * Size-sensitive container that provides an onResize callback that
 * is invoked with the container's width and height whenever it changes.
 *
 * NOTE: This component is meant to be used to detect size changes that
 *       are not a result of a DOM mutation. If you only care about size
 *       changes as a result of a DOM mutation, use MeasuredComponent
 *       instead.
 */
class ResizeSensitiveContainer extends _react.default.Component {

  constructor(props) {
    super(props);
    this._handleContainer = this._handleContainer.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._updateContainerSize = this._updateContainerSize.bind(this);
    this.state = {
      height: -1,
      width: -1
    };
  }

  componentWillUnmount() {
    if (this._rafDisposable != null) {
      this._rafDisposable.unsubscribe();
    }
  }

  _containerRendered() {
    return this.state.height !== -1 && this.state.width !== -1;
  }

  _handleContainer(el) {
    this._container = el;
    this._updateContainerSize();
  }

  _updateContainerSize() {
    if (this._container == null) {
      return;
    }

    const { offsetHeight, offsetWidth } = this._container;
    const { height, width } = this.state;
    if (offsetHeight === height && offsetWidth === width) {
      return;
    }

    this.setState({
      height: offsetHeight,
      width: offsetWidth
    });
    this.props.onResize(offsetHeight, offsetWidth);
  }

  _handleResize() {
    if (this._rafDisposable != null) {
      this._rafDisposable.unsubscribe();
    }
    this._rafDisposable = (_observable || _load_observable()).nextAnimationFrame.subscribe(this._updateContainerSize);
  }

  render() {
    const { children, className, tabIndex } = this.props;
    const { height, width } = this.state;
    const containerClasses = (0, (_classnames || _load_classnames()).default)('nuclide-resize-sensitive-container', className);
    return _react.default.createElement(
      'div',
      { className: 'nuclide-resize-sensitive-container-wrapper' },
      _react.default.createElement(
        'div',
        {
          ref: this._handleContainer,
          className: containerClasses,
          tabIndex: tabIndex },
        children
      ),
      this._containerRendered() ? _react.default.createElement(ResizeSensor, {
        targetHeight: height,
        targetWidth: width,
        onDetectedResize: this._handleResize
      }) : null
    );
  }
}
exports.ResizeSensitiveContainer = ResizeSensitiveContainer;