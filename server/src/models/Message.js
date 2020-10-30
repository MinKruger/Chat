const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const MessageSchema = new Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Message', MessageSchema)
