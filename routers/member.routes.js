import { Router } from "express";
import { allMembers, specificMember, removeMember, addMember, modifyMember } from "../controllers/member.controller.js";

const router = Router();

router.route('/').get(allMembers).post(addMember).put(modifyMember);
router.route('/:id').get(specificMember).delete(removeMember);

export default router;