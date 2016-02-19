import AuthService     from '../services/AuthService';
import history         from '../util/history';
import AppDispatcher   from '../dispatcher/AppDispatcher';
import AuthActionTypes from '../constants/AuthConstants';

const AUTH_FAILED = {success: false};

class AuthAction { 
  login(email, password) {
    AuthService
    .login(email, password)
    .done(function(data) {
      AppDispatcher.dispatch({
        actionType : AuthActionTypes.LOG_IN,
        data       : data
      });  
    })
  }
}

export default new AuthAction();
