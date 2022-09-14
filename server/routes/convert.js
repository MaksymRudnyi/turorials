import express from 'express';

import { convertToMD, uploadDoc } from '../controllers/convert.js';

const router = express.Router(); 

router.upload('/upload', uploadDoc);
router.get('/download', convertToMD);

export default router;