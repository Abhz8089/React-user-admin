// const jwt = require("jsonwebtoken");
// const Admin = require("../models/admin");

// const authMiddleware = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.redirect("/admin"); // Redirect to adminLogin page if no token
//     }

//     jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
//       if (err) {
//         return res.redirect("/admin"); // Redirect to adminLogin page if token is invalid
//       }

//       // Check if the admin exists in the database
//       const admin = await Admin.findById(decodedToken.id);
//       if (!admin) {
//         return res.redirect("/admin"); // Redirect to adminLogin page if admin doesn't exist
//       }

//       // If everything is okay, set the admin data to the request object for further use
//       req.admin = admin;
//       next();
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = authMiddleware;


const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const path = require("path");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      // Redirect to a custom 404 page
      return res
        .status(404)
        .sendFile(path.join(__dirname, "../"));
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        // Redirect to a custom 500 page
        return res
          .status(500)
          .sendFile(path.join(__dirname, "../../client/build/500.html"));
      }

      // Check if the admin exists in the database
      const admin = await Admin.findById(decodedToken.id);
      if (!admin) {
        // Redirect to a custom 404 page
        return res
          .status(404)
          .sendFile(path.join(__dirname, "../../client/build/404.html"));
      }

      // If everything is okay, set the admin data to the request object for further use
      req.admin = admin;
      next();
    });
  } catch (error) {
    console.log(error);
    // Redirect to a custom 500 page
    res
      .status(500)
      .sendFile(path.join(__dirname, "../../client/build/500.html"));
  }
};

module.exports = authMiddleware;

