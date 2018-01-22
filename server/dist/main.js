'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.disable('etag').disable('x-powered-by');

app.use((0, _morgan2.default)('combined'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use((0, _cors2.default)());
app.use('/', _index2.default);

_models2.default.sequelize
// .sync({ force: true })
.sync().then(() => {
  /* eslint-disable no-console */
  app.listen(_config2.default.port, () => console.log(`Server is running at port ${_config2.default.port}`));
}).catch(e => console.log(e));
//# sourceMappingURL=main.js.map