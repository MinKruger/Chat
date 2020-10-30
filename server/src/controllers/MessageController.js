const Message = require('../models/Message')
const User = require('../models/User')

module.exports = {
  get(req, res) {
    Message.find({})
      .populate('user')
      .exec((err, messages) => 
        res.json(messages))
  },
  getOne(req, res) {
    Message.find({
      user: req.params.id
    }).exec((err, messages) => {
      res.json(messages)
    })
  },
  post(req, res) {
    User.findById(res.locals.id, (err, user) => {
      if(user && !err) {
        Message.create({
          content: req.body.content,
          user: user._id
        }, (err, newMessage) => {
          return res.send(newMessage)
        })
      }
    })
  },
  postA(req, res) {
    Message.create({
      content: req.body.content,
      user: null
    }, (err, newMessage) => {
      return res.send(newMessage)
    })
  },
  put(req, res) {
    Message.findById(req.params.id, (err, message) => {
      if(!message)
        return res.send('Error 404, Not Found')
      message.content = req.body.content
      message.save((err, message) => {
        res.send(message)
      })
    })
  },
  delete(req, res) {
    Message.findById(req.params.id, (err, message) => {
      if(!message)
        return res.send('Erro 404, Not Found')
        message.remove((err, deleted) => {
        return res.send(deleted)
      })
    })
  }
}
