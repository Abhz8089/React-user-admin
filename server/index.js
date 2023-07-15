const express =require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const  cookieParser = require('cookie-parser')
const app = express();

//db connection
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('Data base connected')).catch((err)=>console.log('Database not connected',err))

//middleware
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use('/' ,require('./routes/authRoutes'))

const port = 8000 ;

app.listen(port,()=>console.log(`Server is running on port ${port}`))




