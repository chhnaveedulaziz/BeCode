import * as express from 'express';
const router = express.Router();

import payment from './payment';

router.use('/api/payment', payment);

export default router;
