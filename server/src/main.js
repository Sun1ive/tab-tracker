import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import Api from './api/index';

const PORT = process.env.PORT || 3000;
const app = express();
app.disable('etag').disable('x-powered-by');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Api);

/* eslint-disable no-console */
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
