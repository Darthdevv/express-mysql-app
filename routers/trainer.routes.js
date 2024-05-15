import { Router } from "express";
import { allTrainers, specificTrainer, removeTrainer, addTrainer, modifyTrainer} from "../controllers/trainer.controller.js";

const router = Router();

router.route('/').get(allTrainers).post(addTrainer).put(modifyTrainer);
router.route('/:id').get(specificTrainer).delete(removeTrainer);


export default router;