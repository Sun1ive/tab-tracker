import express from 'express';
import * as AuthenticationControllers from '../controllers/AuthenticationControllers';
import * as AuthenticationControllerPolicy from '../policies/AuthenticationControllerPolicy';

const router = express.Router();

router.get('/', AuthenticationControllers.get);

router.post('/register', AuthenticationControllerPolicy.register, AuthenticationControllers.register);

export default router;
