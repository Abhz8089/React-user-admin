const Admin = require('../models/admin');
const User = require('../models/user');
const{comparePassword,hashPassword} = require("../helpers/auth")
const jwt = require('jsonwebtoken');

const tested = (req,res) => {
    res.json('test is working')
}

const loginAdmin =  async (req,res) => {
    try {
        const {email,password} = req.body;

        const admin = await Admin.findOne({email})
        if(!admin){
            return res.json({
                error : 'You are not Admin'
            })
        }
      
        
        const match = await comparePassword(password,admin.password)
        
        if(match) {
            jwt.sign({email:admin.email,id:admin._id,name:admin.name},process.env.JWT_SECRET,{},(err,token) => {
                if(err)throw err;
                res.cookie('token' , token).json(admin)
            })
        }
        if(!match) {
            res.json({
                error:"Password do not match***"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
const adminHome = async (req,res)=>{
  try {
    const allUsers = await User.find({})
    res.json(allUsers)
  } catch (error) {
    console.log(error)
    res.status(500).json({error:'Internal Server Error'})
    
  }
}

const deleteUser = async (req,res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({error:'user not found'});
        }
        await User.findByIdAndDelete(userId)
        const allUsers = await User.find({});
        res.json(allUsers)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server Error"})
    }
}

const logoutAdmin = (req,res) => {
    res.clearCookie('token').json({message:'Logged out successfull'})
}

module.exports = {
  loginAdmin,
  tested,
  adminHome,
  deleteUser,
  logoutAdmin,
};