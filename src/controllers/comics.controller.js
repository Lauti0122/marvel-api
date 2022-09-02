import Comic from "../models/Comic"
/* import axios from "axios"
export const getComics = async (req,res)=>{
    try{
        let comics = await axios(`https://gateway.marvel.com:443/v1/public/comics?apikey=fa58443dde58a551de237d444dac9282&ts=01/09/2022&hash=b73105c03bc82769bdc1d08af2d2a45b`)
        .then(res => res.data)
        res.json(comics.data.results.map(elem=> {
            return {
                id: elem.id,
                title: elem.title,
                description: elem.description,
                prices: elem.prices,
                pageCount: elem.pageCount,
                format: elem.format,
                textObjects: elem.textObjects,
                urls: elem.urls,
                thumbnail: elem.thumbnail
            }
        }))
    }catch(err){
        console.log(`error ${err}`)
    }
}
 */

export const postComics = async(req,res)=>{
    try{
        const {title, price, description} = req.body
        if(!title || !price || !description){
            return res.status(400).json({ message: "Missing data" });
        }
        const comicExists = await Comic.findOne({ title : title});
        if (comicExists) return res.status(400).json({ message: "Comic already exists" });

        const newComic = new Comic(req.body)
        const comicSaved = await newComic.save();
        res.status(201).json(comicSaved)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getComics = async(req,res)=>{
    try{
            const comics = await Comic.find();

        res.status(201).json(comics)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getComicByID = async (req,res)=>{
    try{

        const {ComicID} = req.params
        const comic = await Comic.findById(ComicID)
        res.status(200).json(comic)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const updateComicByID = async (req,res)=>{
    try{
        const {ComicID} = req.params
        await Comic.findByIdAndUpdate(ComicID, req.body,{
            new:true
        })
        res.status(200).json("Successfully updated comic")
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
    
}

export const deleteComicByID = async (req,res)=>{
    try{
        const {ComicID}= req.params
        await Comic.findByIdAndDelete(ComicID)
        res.status(200).send("Successfully comic removed")
    
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}