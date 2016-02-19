import AppDispatcher    from '../dispatcher/AppDispatcher';
import BaseStore        from './BaseStore';
import AuthActionTypes  from '../constants/AuthConstants';

class AuthStore extends BaseStore {
  constructor() {
    super();
    this._dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
    this._user          = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case AuthActionTypes.LOG_IN:
        this._user = 'test-user';
        this.emitChange(); 
        break;
      default: 
        break;
    }

    // Required by the dispatcher
    return true; 
  }

  get user() {
    return this._user; 
  }
}

export default new AuthStore();
