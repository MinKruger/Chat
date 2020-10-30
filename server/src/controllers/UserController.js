const jwt = require('jsonwebtoken')

const User = require('../models/User')


module.exports = {
  login(req, res) {
    console.log(req.body.login)
    User.findOne({ login: req.body.login }, (err, user) => {
      console.log(user)
      if(err)
        return res.send('Erro')
      console.log(req.body.password)
      console.log(user.password)
      if(req.body.password == user.password) {
        var token = jwt.sign({ id: user._id }, 'qualquerMerda', { expiresIn: '7d' })
        return res.send(token)
      } else {
        return res.send('Senha errada')
      }
    })
  },
  get(req, res) {
    User.find({}, (err, users) => {
      return res.json(users)
    })
  },
  getPerfil(req, res) {
    User.findById(res.locals.id).exec((err, user) => {
      res.json(user)
    })
  },
  getbyid(req, res) {
    // console.log(req.params.login)
    User.findOne({ login: req.params.login }, (err, user) => {
      if(!user) {
        return res.send('Usuário não existe')
      } else {
        res.send(user)
      }
    })
  },
  post(req, res) {
    User.findOne({ login: req.body.login }, (err, user) => {
      if(!user && !err) {
        User.create({
          login: req.body.login,
          password: req.body.password,
          email: req.body.email
        }, (err, newUser) => {
          return res.send(newUser)
        })
      } else {
        return res.send('Already Exist')
      }
    })
  },
  put(req, res) {
    User.findById(res.locals.id, (err, user) => {
      if(!user)
        return res.send('Erro 404 Not Found')
      user.login = req.body.login
      user.password = req.body.password
      user.save((err, user) => {
        res.send(user)
      })
    })
  },
  // delete(req, res) {
  //   User.findById(res.locals.id /* req.params.id */, (err, user) => {
  //     if(!user)
  //       return res.send('Erro')
  //     user.remove((err, deleted) => {
  //       return res.send(deleted)
  //     })
  //   })
  // }
}
