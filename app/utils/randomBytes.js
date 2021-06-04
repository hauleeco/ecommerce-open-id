const cryptoRandomString = require("crypto-random-string");

const randomClientSecretKey = () => {
  return cryptoRandomString({ length: 48, type: "alphanumeric" });
};

const randomClientState = () => {
  return cryptoRandomString({length: 6, type: 'numeric'});
};

const randomCode = () => {
  return cryptoRandomString({length: 16, type: 'alphanumeric'});
};

const randomAccessToken = () => {
  return cryptoRandomString({length: 12, type: 'alphanumeric'});
};

module.exports = {
  randomClientSecretKey,
  randomClientState,
  randomCode,
  randomAccessToken
};
