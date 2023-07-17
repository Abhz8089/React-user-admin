const express =require('express');
const router = express.Router();
const {
  loginAdmin,
  tested,
  adminHome,
  deleteUser,
  logoutAdmin,
} = require("../controllers/adminController");
const adminMiddleware = require("../MiddleWares/adminMiddleware")

router.get('/admin',tested)
router.post('/adminLogin',loginAdmin)
router.get('/adminHome',adminMiddleware,adminHome)
router.delete("/deleteUser/:userId",deleteUser)
router.post('/adminLogout',logoutAdmin)
module.exports = router;