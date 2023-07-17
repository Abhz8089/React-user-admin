const express = require('express')
const router = express.Router();
const cors = require('cors');
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  uploadProfilePicture,
  handleProfilePictureUpload
} = require("../controllers/authController");
const {authenticateUser} = require('../MiddleWares/authMiddileware')


router.get('/',test)
router.post('/register',registerUser)
router.post('/login' , loginUser)
router.get('/profile', getProfile)
router.post('/logout',logoutUser)
router.post(
  "/upload-profile",
  authenticateUser,uploadProfilePicture,
  handleProfilePictureUpload
);



module.exports = router