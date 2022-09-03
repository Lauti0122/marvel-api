import { Router } from "express";
const router = Router()
import {postReview, getReviews, getReviewByID} from '../controllers/reviews.controller';
router.post('/',postReview)
router.get('/', getReviews)
router.get('/:ReviewID', getReviewByID)
export default router