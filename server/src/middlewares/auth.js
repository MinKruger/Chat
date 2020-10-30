const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = (req, res, next) => {
  
  let token = req.headers.token;

  if(!token) {
    return res.send('Error 404, Not Found')
  }

  jwt.verify(token, 'qualquerMerda', (err, decoded) => {

    if(err)
      return res.send('Token invalido')

    res.locals.id = decoded.id

    return next()
  })
}
