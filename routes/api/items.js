const express = require('express');
const router = express.Router();

// Import Item Mongoose Model
const Item = require('../../models/Item');

// @route   GET /api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then(items => res.json(items));
})

// @route   POST /api/items
// @desc    Add Item to DB
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
   .then(item => res.json(item));
});

// @route   DELETE /api/items/:id
// @desc    Delete Item from DB
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;