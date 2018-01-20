import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'hello there!' });
});

router.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`,
  });
});

export default router;
