const jwt = require('jsonwebtoken');

const secret = 'Mycat'; //Esto deberia ser un secret en env
//sub: la forma en que podremos identificar el usuario
//scope: se puede usar para manejar roles o permisos
const payload = {
  sub: 1,
  scope: 'customer'
}

function signToken(payload, secret){
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
