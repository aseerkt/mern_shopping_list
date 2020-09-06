const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Importing authorization middleware
const auth = require('../../middlewares/auth');

// Import User Mongoose Model
const User = require('../../models/User');

// Making process.env accessible
require('dotenv').config();

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;


// @route   POST /api/auth
// @desc    Authenticate User
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Checking for empty fields
  if (!email || !password) return res.status(400).json({ msg: 'All fields are required' });

  // Check if user exists
  User
    .findOne({ email })
    .then(user => {
      // If user does not exist
      if(!user) return res.status(400).json({ msg: 'User does not exist' });

      // If user exists
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          // If password matches
          jwt.sign(
            { id: user._id },
            jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;

              res.status(200).json({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });

    });
})

// @route   GET /api/auth/user
// @desc    Get User Data
// @access  Prvate
router.get('/user', auth, (req,res) => {
  User
    .findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})


module.exports = router;