import db from '../models';

export const register = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(409).send({
      error: 'This email already in use.',
    });
  }
};

export const login = async () => {};
