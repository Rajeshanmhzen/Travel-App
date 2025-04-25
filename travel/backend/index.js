const express = require("express")
const connectDB = require("./config/db")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const userRouter = require("./routes/user.route")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


const corsOptions = {
    origin: "http://localhost:5173",
    credentials:true,
    exposeHeaders: ['Access-Control-Allow-Credentials'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions))


app.use("/api/v1/auth", userRouter)

const PORT = process.env.PORT  || 3000
connectDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log("Database connected Successfully")
        console.log(`Server is runnning at port http://localhost:${PORT}`)
    })
})
