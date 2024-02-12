const passport = require('passport');

//Aquí podemos listar todas las estrategias que queremos usar
const LocalStrategy = require('./strategies/local.strategy');
passport.use(LocalStrategy);
