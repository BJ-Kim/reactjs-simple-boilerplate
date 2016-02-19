//jest.dontMock('../src/app/stores/AuthStore');

//describe('AuthStore', function() {
//  var AuthConstants = require('../src/app/constants/AuthConstants');
//  var AppDispatcher;
//  var AuthStore;
//  var callback;

//  // mock actions
//  var actionLogin = {
//    actionType: AuthConstants.LOG_IN,
//    data      : {
//      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJhbXBhcnQ4MUBnbWFpbC5jb20iLCJpYXQiOjE0NDk0MTk1MzksImV4cCI6MTQ1MjAxMTUzOX0.ppADc1MRWQ8tjtjr-ThhxmQ5MPsM9e0vIVT7p4TIzdE",
//    },
//    nextState : '/'
//  }

//  beforeEach(function() {
//    AppDispatcher = require('../src/app/dispatcher/AppDispatcher');
//    AuthStore     = require('../src/app/stores/AuthStore');
//    callback      = AppDispatcher.register.mock.calls[0][0]; 
//  });

//  it('registers a callback with the dispatcher', function() {
//    expect(AppDispatcher.register.mock.calls.length).toBe(1); 
//  }); 
//})
