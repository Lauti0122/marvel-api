import { Router } from "express";
const router = Router()
import {getProducts, getProductByID, createProducts, deleteProductByID, updateProductByID} from '../controllers/products.controller';
//otra forma
// import * as productController from "../controllers/products.controller"  
//router.get('/', productController.getProducts)
import {authJWT} from '../middlewares'

router.get('/', getProducts)
router.get('/:productID', getProductByID)
router.post('/', [authJWT.verifyToken, authJWT.isModerator], createProducts)
router.put('/:productID', [authJWT.verifyToken, authJWT.isModerator], updateProductByID)
router.delete('/:productID',[authJWT.verifyToken, authJWT.isAdmin], deleteProductByID)


export default router