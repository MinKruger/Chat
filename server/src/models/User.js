const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  email: { type: String, required: false},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
})

module.exports = mongoose.model('User', UserSchema)
