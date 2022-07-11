import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./Routes/userRoutes.js"

dotenv.config()
const app = express();
const PORT = process.env.PORT;


app.use(bodyParser.json({limit : "30mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))

app.use(cors())
app.get("/users", userRoutes)

mongoose.connect(process.env.CONNECTION_URL)
.then(() => { app.listen(PORT, () =>  console.log(`Server listening on port ${PORT}`))
   
}).catch(error => {
    console.log(error.message)
})
