'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthenticationControllers = require('../controllers/AuthenticationControllers');

var AuthenticationControllers = _interopRequireWildcard(_AuthenticationControllers);

var _AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

var AuthenticationControllerPolicy = _interopRequireWildcard(_AuthenticationControllerPolicy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post('/register', AuthenticationControllerPolicy.register, AuthenticationControllers.register);

router.post('/login', AuthenticationControllers.login);

exports.default = router;
//# sourceMappingURL=index.js.map