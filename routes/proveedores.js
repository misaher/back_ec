///Rutas para los proveedores
 const   express  =  require('express')
   const router = express.Router();
   const  provedoresControllers = require('../controlers/provedoresControllers')
  
   //provedoresControllers.crearProveedor
      router.post('/',provedoresControllers.crearProveedor);
      router.get('/',provedoresControllers.consultarProvedores);
      router.delete('/:id',provedoresControllers.eliminarProvedor);
      module.exports = router;
      