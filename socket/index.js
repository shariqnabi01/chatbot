const { verifyToken } = require('../middleware/authMiddleware');
const Message = require('../models/messageModel');

module.exports = function (io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    const user = verifyToken(token);
    if (!user) return next(new Error('Auth error'));
    socket.user = user;
    next();
  });

  io.on('connection', (socket) => {
    const user = socket.user;
    console.log(`${user.email} connected`);

    socket.on('join', ({ channelId }) => socket.join(channelId));

    socket.on('message', async ({ channelId, message }) => {
      const saved = await Message.create({
        channel_id: channelId,
        sender_id: user.id,
        text: message,
      });

      io.to(channelId).emit('message', {
        user: user.email,
        text: saved.rows[0].text,
        timestamp: saved.rows[0].timestamp,
      });
    });

    socket.on('disconnect', () => {
      console.log(`${user.email} disconnected`);
    });
  });
};
