import bcrypt from 'bcrypt';

async function hashPassword(user) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  const salt = await bcrypt.genSalt(SALT_FACTOR);
  const hash = await bcrypt.hash(user.password, salt, null);
  const data = await user.setDataValue('password', hash);
  // eslint-disable-next-line
  return data;
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    },
  );

  User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
