import Review from "../models/Review";
import Comic from "../models/Comic";
import User from "../models/User";

export const postReview = async(req,res)=>{
    try{
        const {rating, comment, comicID, date, userID } = req.body  
        if(rating < 1 || rating > 5){
            return res.status(404).json({message: `min 1 - max 5`})
        }
      // recupero el comic
        let comic = await Comic.findOne({id: comicID})
        let user = await User.findOne({id: userID})

        let newReview = new Review({
            rating,
            date,
            comment,
            comicID: comic._id,
            userID: user._id
        })

        const reviewSaved = await newReview.save();
        
        comic.reviews = comic.reviews.concat(reviewSaved._id)   
        await comic.save()

        user.reviews = user.reviews.concat(reviewSaved._id)
        await user.save()

        res.status(201).json(reviewSaved)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getReviews = async(req,res)=>{
    try{
            const reviews = await Review.find().populate('userID')

        res.status(201).json(reviews)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getReviewByID = async (req,res)=>{
    try{

        const {ReviewID} = req.params
        const review = await Review.findById(ReviewID)
        res.status(200).json(review)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}