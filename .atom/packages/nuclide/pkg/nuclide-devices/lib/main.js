'use strict';

var _createPackage;

function _load_createPackage() {
  return _createPackage = _interopRequireDefault(require('nuclide-commons-atom/createPackage'));
}

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('nuclide-commons/UniversalDisposable'));
}

var _DevicePanelWorkspaceView;

function _load_DevicePanelWorkspaceView() {
  return _DevicePanelWorkspaceView = require('./DevicePanelWorkspaceView');
}

var _atom = require('atom');

var _ServerConnection;

function _load_ServerConnection() {
  return _ServerConnection = require('../../nuclide-remote-connection/lib/ServerConnection');
}

var _reduxObservable;

function _load_reduxObservable() {
  return _reduxObservable = require('../../commons-node/redux-observable');
}

var _redux;

function _load_redux() {
  return _redux = require('redux');
}

var _createEmptyAppState;

function _load_createEmptyAppState() {
  return _createEmptyAppState = require('./redux/createEmptyAppState');
}

var _Reducers;

function _load_Reducers() {
  return _Reducers = _interopRequireWildcard(require('./redux/Reducers'));
}

var _Actions;

function _load_Actions() {
  return _Actions = _interopRequireWildcard(require('./redux/Actions'));
}

var _Epics;

function _load_Epics() {
  return _Epics = _interopRequireWildcard(require('./redux/Epics'));
}

var _providers;

function _load_providers() {
  return _providers = require('./providers');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

let activation = null;

class Activation {

  constructor(state) {
    const epics = Object.keys(_Epics || _load_Epics()).map(k => (_Epics || _load_Epics())[k]).filter(epic => typeof epic === 'function');
    this._store = (0, (_redux || _load_redux()).createStore)((_Reducers || _load_Reducers()).app, (0, (_createEmptyAppState || _load_createEmptyAppState()).createEmptyAppState)(), (0, (_redux || _load_redux()).applyMiddleware)((0, (_reduxObservable || _load_reduxObservable()).createEpicMiddleware)((0, (_reduxObservable || _load_reduxObservable()).combineEpics)(...epics))));
    this._disposables = new (_UniversalDisposable || _load_UniversalDisposable()).default((_ServerConnection || _load_ServerConnection()).ServerConnection.observeRemoteConnections().subscribe(conns => {
      const hosts = conns.map(conn => conn.getUriOfRemotePath('/'));
      this._store.dispatch((_Actions || _load_Actions()).setHosts(['local'].concat(hosts)));
    }));
  }

  dispose() {
    this._disposables.dispose();
  }

  consumeWorkspaceViewsService(api) {
    this._disposables.add(api.addOpener(uri => {
      if (uri === (_DevicePanelWorkspaceView || _load_DevicePanelWorkspaceView()).WORKSPACE_VIEW_URI) {
        return new (_DevicePanelWorkspaceView || _load_DevicePanelWorkspaceView()).DevicePanelWorkspaceView(this._store);
      }
    }), () => api.destroyWhere(item => item instanceof (_DevicePanelWorkspaceView || _load_DevicePanelWorkspaceView()).DevicePanelWorkspaceView), atom.commands.add('atom-workspace', 'nuclide-device-panel:toggle', event => {
      api.toggle((_DevicePanelWorkspaceView || _load_DevicePanelWorkspaceView()).WORKSPACE_VIEW_URI, event.detail);
    }));
  }

  deserializeDevicePanelState() {
    return new (_DevicePanelWorkspaceView || _load_DevicePanelWorkspaceView()).DevicePanelWorkspaceView(this._store);
  }

  _refreshDeviceTypes() {
    this._store.dispatch((_Actions || _load_Actions()).setDeviceTypes(Array.from((0, (_providers || _load_providers()).getProviders)().deviceList).map(p => p.getType())));
  }

  _createProviderRegistration(providers, onDispose) {
    return provider => {
      if (!(activation != null)) {
        throw new Error('Device panel service API used after deactivation');
      }

      providers.add(provider);
      if (onDispose != null) {
        onDispose();
      }
      return new _atom.Disposable(() => {
        if (activation != null) {
          providers.delete(provider);
        }
      });
    };
  }

  provideDevicePanelServiceApi() {
    activation = this;
    this._disposables.add(() => {
      activation = null;
    });
    return {
      registerListProvider: this._createProviderRegistration((0, (_providers || _load_providers()).getProviders)().deviceList, () => this._refreshDeviceTypes()),
      registerInfoProvider: this._createProviderRegistration((0, (_providers || _load_providers()).getProviders)().deviceInfo),
      registerProcessesProvider: this._createProviderRegistration((0, (_providers || _load_providers()).getProviders)().deviceProcesses),
      registerTaskProvider: this._createProviderRegistration((0, (_providers || _load_providers()).getProviders)().deviceTask),
      registerProcessTaskProvider: this._createProviderRegistration((0, (_providers || _load_providers()).getProviders)().processTask)
    };
  }
}

(0, (_createPackage || _load_createPackage()).default)(module.exports, Activation);