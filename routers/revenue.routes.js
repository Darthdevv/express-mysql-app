import { Router } from 'express';
import { allRevenues, trainerRevenues } from '../controllers/revenue.controller.js';

const router = Router();

router.get('/', allRevenues);
router.get('/trainer-revenues/:id', trainerRevenues);


export default router;