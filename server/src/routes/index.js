import express from 'express';
import * as AuthenticationControllers from '../controllers/AuthenticationControllers';
import * as AuthenticationControllerPolicy from '../policies/AuthenticationControllerPolicy';

const router = express.Router();

router.post('/register',  AuthenticationControllerPolicy.register,  AuthenticationControllers.register);

router.post('/login',  AuthenticationControllers.login);

export default router;
