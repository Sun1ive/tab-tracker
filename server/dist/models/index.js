'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = {};

const sequelize = new _sequelize2.default(_config2.default.db.database, _config2.default.db.user, _config2.default.db.password, _config2.default.db.options);

_fs2.default.readdirSync(__dirname).filter(file => file !== 'index.js').forEach(item => {
  console.log(item);
  const model = sequelize.import(_path2.default.join(__dirname, item));
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

exports.default = db;
//# sourceMappingURL=index.js.map