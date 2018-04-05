'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
});
//# sourceMappingURL=User.js.map