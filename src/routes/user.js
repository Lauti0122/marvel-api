import { Router } from "express";
import { createUser } from "../controllers/user.controllers";
import {authJWT, verifySignUP} from '../middlewares'
const router = Router()
router.post('/',[authJWT.verifyToken, authJWT.isAdmin, verifySignUP.checkRolesExisted], createUser)
export default router