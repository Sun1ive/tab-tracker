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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(403).json({ error: 'The login information is incorrect' });
    }

    const isPasswordValid = password === user.password;
    
    if (!isPasswordValid) {
      return res.status(403).json({ error: 'The login information is incorrect' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      error: 'The error has occured trying to log in',
    });
  }
};
