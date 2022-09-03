// express settings
import express from "express";
import morgan from 'morgan'
import products from './routes/products'
import auth from './routes/auth'
import user from './routes/user'
import comics from './routes/comics'
import reviews from './routes/reviews'
import { createRole } from "./libs/initialSetup";

const app = express()
createRole();
app.use(morgan('dev'));
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({
        author: "Lauti"
    })
})

app.use('/products', products)
app.use('/auth', auth)
app.use('/users', user)
app.use('/comics', comics)
app.use('/reviews', reviews)
 export default app;