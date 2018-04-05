import bcrypt from 'bcrypt';

const hashPassword = async user => {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  const data = await bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => user.setDataValue('password', hash));
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

  User.prototype.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
