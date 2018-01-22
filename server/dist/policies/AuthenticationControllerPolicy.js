'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b = exports.register = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const register = exports.register = (req, res, next) => {
  const schema = {
    email: _joi2.default.string().email(),
    password: _joi2.default.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
  };
  const { error, value } = _joi2.default.validate(req.body, schema);

  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'You must provide a valid email address'
        });
        break;
      case 'password':
        res.status(400).send({
          error: 'Bad password'
        });
        break;
      default:
        res.status(400).send({ error: 'Invalid registration info' });
        break;
    }
  } else {
    next();
  }
};

const b = exports.b = () => {};
//# sourceMappingURL=AuthenticationControllerPolicy.js.map