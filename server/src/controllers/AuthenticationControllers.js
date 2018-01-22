import jwt from 'jsonwebtoken';
import db from '../models/index';
import config from '../config/config';

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

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
      res.status(403).json({ error: 'The login information was incorrect' });
    }

    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      res.status(403).json({ error: 'The login information was incorrect' });
    }

    const userJson = user.toJSON();
    res.send({
      message: 'Ok',
      user: userJson,
      token: jwtSignUser(userJson),
    });
  } catch (error) {
    res.status(500).send({
      error: 'An error has occured trying to log in',
    });
  }
};
