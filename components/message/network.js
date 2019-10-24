const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req, res){
  console.log(req.headers)
  // res.send('Lista de mensajes')
  response.success(req, res, 'Lista de mensajes');
})

router.post('/', function(req, res){
  console.log(req.body);
  console.log(req.query);
  response.success(req, res, 'Creado correctamente', 201);
})

module.exports = router;