import { Router } from "express";
import { getUser,updateUser } from "../controllers/user.controllers";
import {authJWT, verifySignUP} from '../middlewares'
const router = Router()
// router.post('/',[authJWT.verifyToken, authJWT.isAdmin, verifySignUP.checkRolesExisted], createUser)
router.get('/',getUser)
router.put('/:userID',updateUser)
export default router