const jwt = require('jsonwebtoken');

// Pulling variables from .env
require('dotenv').config();

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  if(!token) return res.status(401).json({ msg: 'Unauthorized: No token' });

  try {

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();

  } catch (e) {
    return res.status(400).json({ msg: 'Invalid token' });
  }
}

module.exports = auth;