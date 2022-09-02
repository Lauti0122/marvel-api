import { Router } from "express";
const router = Router()
import {getComics, postComics,getComicByID,updateComicByID,deleteComicByID} from '../controllers/comics.controller';
router.get('/', getComics)
router.post('/',postComics)
router.get('/:ComicID', getComicByID)
router.put('/:ComicID', updateComicByID)
router.delete('/:ComicID', deleteComicByID)

export default router