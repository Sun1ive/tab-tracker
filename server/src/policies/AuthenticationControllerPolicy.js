import Joi from 'joi';

export const register = (req, res, next) => {
  const schema = {
    email: Joi.string().email(),
    password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
  };
  const { error, value } = Joi.validate(req.body, schema);

  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: 'You must provide a valid email address',
        });
        break;
      case 'password':
        res.status(400).send({
          error: 'Bad password',
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

export const b = () => {};
