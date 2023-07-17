const jwt = require('jsonwebtoken');
const User= require('../models/user')

const authenticateUser = async (req, res, next) => {
  // Get the token from the request headers or cookies (you can choose one method)
  const token = req.headers.authorization || req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token not found" });
  }

  try {
    // Verify the token and extract user data
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database using the decoded data
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: "Unauthorized - User not found" });
    }

    // Attach the user data to the request object for use in other routes
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};
module.exports = { authenticateUser };