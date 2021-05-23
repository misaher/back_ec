const express = require('express');
const cors =  require('cors');
const {createConection} =require('./database')

require ('dotenv').config({path:'variables.env'})

//
const  app = express();
createConection();

     app.use(cors());
 /// habilitando express . JSON
 app.use(express.json({extended: true}));

 app.use('/api/provedores',require('./routes/proveedores'));
 app.use('/api/candidato' ,require('./routes/candidato'))



 app.listen(process.env.PORT,()=>{
        console.log('El servidro esta funcionando en el puerto--> ',process.env.PORT);
 })
 


 