const passport = require('passport');

//Aquí podemos listar todas las estrategias que queremos usar
const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
