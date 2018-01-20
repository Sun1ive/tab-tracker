import db from '../models/index';

export const register = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.send(user.toJSON());
  } catch (error) {
    res.status(409).send({
      error: 'This email already in use.',
    });
  }
};

export const get = (req, res) => {
  res.send({ message: 'Hello World ' });
};
