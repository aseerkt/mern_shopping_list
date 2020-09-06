const express =  require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Import User Mongoose Model
const User = require('../../models/User');

// Make process.env available
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

// @route   POST /api/users
// @desc    Register New User
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // Basic Validation
  if (!name || !email || !password){
    return res.status(400).json({ msg: 'All fields are required' });
  }
  // Check for existing users
  User
    .findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });

      // Register User
      const newUser = new User ({
        name,
        email,
        password
      });

      //Create Salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          newUser.save()
            .then(user => {

              // JWT Signing
              jwt.sign(
                {id: user._id},
                jwtSecret,
                {expiresIn: 3600},
                (err, token) => {
                  if (err) throw err;

                  return res.status(200).json({
                    token,
                    user: {
                      id: user._id,
                      name: user.name,
                      email: user.email
                    }
                  })
                }
              ).catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
      })
    });
})



module.exports = router;