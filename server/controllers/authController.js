const User = require('../models/user')
const {comparePassword,hashPassword}  = require('../helpers/auth')
const jwt = require('jsonwebtoken');
const multer = require ('multer');
const path = require('path');
const UserModel = require('../models/user');

const test = (req,res) => {
  res.json('test is working')
  
}

//register endpoint

const registerUser = async(req,res) => {
  try {
    
    const {name,email,password} = req.body;
    //check if name was entered
    if(!name){
      return res.json({
        error:'name is required'
      })
    }
    //if password is good
    if(!password || password.length <6){
      return res.json({
        error : 'password is required and shold be at least 6 characters long'
      })

    };
    //check email
    const exist =await User.findOne({email});
    if(exist) {
      return res.json({
        error : 'Email is taken already '
      })
    }

    const hashedPassword = await hashPassword(password)
   //creat user in database
    const user = await User.create({
      name,
      email,
      password : hashedPassword
    })
   
    return res.json(user)
  } catch (error) {
    console.log('User creating error in line 39 authC.js',error)
  }
}

//login endpoint
const loginUser = async (req,res) => {
  try {
    const {email,password} = req.body;

    //check if user exist 
    const user = await User.findOne({email})
    if(!user) {
      return res.json({
        error : 'No user found'
      })
    }

    //check the password match
    const match = await comparePassword(password,user.password)
    if(match) {
      
    jwt.sign({email:user.email,id:user._id ,name:user.name,image:user.image}, process.env.JWT_SECRET ,{},(err,token) => {
      if(err) throw err;
      res.cookie('token' , token).json(user)
    })

    }
    if(!match) {
      res.json({
        error:'Password do not match'
      })
    }
  } catch (error) {
    console.log(error)
    
  }
}

const getProfile = (req,res) => {
  const {token} = req.cookies
  if(token) {
    jwt.verify(token,process.env.JWT_SECRET,{},(err,user) => {
      if(err) throw err;
      
      UserModel.findOne({email:user.email}).then(users => res.json(users)).catch(err => res.json(err))
    })
  }else{
    res.json(null)
  }
}
//file upload
const storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'uploads/');
  },
  filename: function(req,file,cb){
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9);
    cb(null,file.fieldname+'-'+uniqueSuffix+ext);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const uploadProfilePicture = upload.single("profilePicture");

const handleProfilePictureUpload = async(req, res) => {
  
  if (!req.file) {
    return res.status(400).json({ error: "please Upload an image." });
  }
  console.log("130 req.files auth c")
  console.log(req.file)
  const imageUrl =req.file.filename;
   try {
     // Find the user in the database using the authenticated user's ID
     const user = await User.findById(req.user._id);
     

     if (!user) {
       return res.status(401).json({ error: "Unauthorized - User not found" });
     }
    console.log(imageUrl)
     // Set the profilePicture field and save the user
     user.image = imageUrl;
     await user.save();

     return res.json({ imageUrl });
   } catch (error) {
     return res.status(500).json({ error: "Error saving profile picture" });
   }
};

//logout
const logoutUser = (req,res) => {
  res.clearCookie('token').json({message:'Logged out successfully'})
}

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  uploadProfilePicture,
  handleProfilePictureUpload,
};