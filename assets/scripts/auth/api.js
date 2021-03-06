'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const autoLogIn = function (data, textStatus, jqXHR, signUpData) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: signUpData
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });

};

const signOut = () => {
  return $.ajax ({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  signUp,
  autoLogIn,
  signIn,
  changePassword,
  signOut,
};
