const db = require('../config/db');

exports.create = ({ channel_id, sender_id, text }) =>
  db.query(
    'INSERT INTO messages (channel_id, sender_id, text) VALUES ($1, $2, $3) RETURNING *',
    [channel_id, sender_id, text]
  );

exports.getByChannel = (channelId, limit = 50) =>
  db.query(
    `SELECT messages.*, users.email AS sender_email 
     FROM messages JOIN users ON messages.sender_id = users.id 
     WHERE channel_id=$1 
     ORDER BY timestamp DESC 
     LIMIT $2`,
    [channelId, limit]
  );
