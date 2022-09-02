import { Router } from "express";
const router = Router()
import {signin, signup} from "../controllers/auth.controllers"
import {verifySignUP} from '../middlewares'
router.post('/signup', [verifySignUP.checkUserExist, verifySignUP.checkRolesExisted], signup)
router.post('/signin', signin)

export default router