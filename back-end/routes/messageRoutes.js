// backend/routes/messageRoutes.js

const express = require('express');
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware.verifyToken);

router.post('/messages', messageController.createMessage);
router.get('/messages', messageController.getAllMessages);

module.exports = router;
