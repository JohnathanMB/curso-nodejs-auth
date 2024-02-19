// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDc5NDY4MzB9.4LDTmrFlcSmw-uTr2KvNdRc0xBIrKY6tKUL3q-2o-aw
const jwt = require('jsonwebtoken');

const secret = 'Mycat'; //Esto deberia ser un secret en env
const tokenEncrypted = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDc5NDY4MzB9.4LDTmrFlcSmw-uTr2KvNdRc0xBIrKY6tKUL3q-2o-aw';

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const token = verifyToken(tokenEncrypted, secret);
console.log(token);
