import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import Api from './api/index';

const app = express();
app.disable('etag').disable('x-powered-by');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Api);

/* eslint-disable no-console */
app.listen(3000, () => console.log('Server is running at port 3000'));
