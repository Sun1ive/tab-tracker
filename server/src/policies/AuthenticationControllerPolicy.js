import Joi from 'joi';

module.exports = {
  async register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{6,32}$')),
    };
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).json({ error: 'Invalid email address' });
          break;
        case 'password':
          res
            .status(400)
            .json({ error: 'Invalid password, should be between 6 and 32 characters' });
          break;
        default:
          res.status(400).json({ error: 'Invalid registration information' });
      }
    } else {
      next();
    }
  },
};
