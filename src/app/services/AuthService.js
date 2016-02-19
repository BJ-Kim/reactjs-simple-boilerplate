var $ = require('jquery');

// You need to return your own 
class AuthService {
  login(email, password, successCB) {
    return $.ajax({
      url         : '/authenticate',
      method      : 'POST',
      dataType    : 'json',
      contentType : 'application/json',
      data        : JSON.stringify({email : email, password : password}),
      cache       : false
    });
  }

}

export default new AuthService();
