import express from 'express';
import config from '../config';
import middleware from '../middleware';
import restaurant from '../controller/restaurant';

let router = express();

router.use(middleware(config));

router.use('/restaurant', restaurant(config));

export default router;
