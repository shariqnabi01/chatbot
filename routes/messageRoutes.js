const express = require('express');
const router = express.Router();
const Message = require('../models/messageModel');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/messages', authenticate, async (req, res) => {
  const { channelId, limit } = req.query;
  const result = await Message.getByChannel(channelId, limit || 50);
  res.json(result.rows);
});

module.exports = router;
