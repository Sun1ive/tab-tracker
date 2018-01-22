'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return _jsonwebtoken2.default.sign(user, _config2.default.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

const register = exports.register = async (req, res) => {
  try {
    const user = await _index2.default.User.create(req.body);
    res.send(user.toJSON());
  } catch (error) {
    res.status(409).send({
      error: 'This email already in use.'
    });
  }
};

const login = exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await _index2.default.User.find({
      where: {
        email
      }
    });

    if (!user) {
      res.status(403).json({ error: 'The login information was incorrect' });
    }
    const isPasswordValid = await user.comparePassword(password);

    console.log(isPasswordValid);

    if (!isPasswordValid) {
      res.status(403).json({ error: 'The login information was incorrect' });
    }

    const userJson = user.toJSON();
    res.send({
      message: 'Ok',
      user: userJson,
      token: jwtSignUser(userJson)
    });
  } catch (error) {
    res.status(500).send({
      err: error,
      error: 'An error has occured trying to log in'
    });
  }
};
//# sourceMappingURL=AuthenticationControllers.js.map