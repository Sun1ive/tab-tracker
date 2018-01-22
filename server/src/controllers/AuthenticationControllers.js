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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(403).json({
        error: 'The login information was incorrect',
      });
    }
    res.send(user.toJSON());
  } catch (error) {
    res.status(409).send({
      error: 'This email already in use.',
    });
  }
};
