import Joi from 'joi';

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.stirng().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{6,32}$')),
    };
    next();
  },
};
