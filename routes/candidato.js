const   express  =  require('express')
const router = express.Router();
const  candidatoController= require('../controlers/candidatoController')

  router.get('/',candidatoController.consultarBienvenida);


 module.exports = router;