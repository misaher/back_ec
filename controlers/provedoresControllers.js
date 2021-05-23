const {getConection} = require('../database') 
const {v4} = require('uuid')
exports.crearProveedor =  async (req,res)=>{
      const  nuevoProvedor ={
                 id: v4(),
                 nombre:req.body.nombre,
                 ubicacion: req.body.ubicacion,
                 tipo: req.body.tipo,
                 descripcion: req.body.descripcion 

      }
            try{
              let   datos  =  await getConection().get('proveedores').find({nombre: req.body.nombre}).write();
               if(!datos){
                await getConection().get('proveedores').push(nuevoProvedor).write()
                res.json({response: "Proveedor dado de alta"})
               }else{
               res.json({response: "El provedor ya existe "})
               
                } 
                console.log(datos);
                
      
       } catch(e){
        res.json({response: "sucedio un errror :("})  
       }
    
}

exports.consultarProvedores = async(req,res)=>{
       try{
       const provedores =  await  getConection().get('proveedores').value()
         // console.log(provedores)
         res.json({"provedores": provedores})
        }catch(e){
                res.json({response: "sucedio un errror :("})  
        }
}

/// req.params.id 
exports.eliminarProvedor = async(req, res) =>{
        // console.log(req.params.id)
            try{  
              await  getConection().get('proveedores').remove({id:req.params.id}).write();
           res.json({response: "eliminado con exito"})
            }catch(e){
                res.json({response: "sucedio un errror :("})
            }
}