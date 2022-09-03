import User from "../models/User"

export const getUser = async(req,res)=>{
   try{
        const users = await User.find();

    res.status(201).json(users)

}  catch(error){
    res.status(404).json({message: `${error}`})
}
}


export const updateUser = async (req,res)=>{
    try{
        const {userID} = req.params
        await Comic.findByIdAndUpdate(userID, req.body,{
            new:true
        })
        res.status(200).json("Information updated successfully")
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
    
}