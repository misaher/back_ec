  //Modulo  ocupado par gnerera mi archivo  .json
   const lowdb  = require('lowdb');

  ////// creando de manera asincrona el archivo
  const FileAsync = require('lowdb/adapters/FileAsync');
  let db;

  async function createConection (){
    const adapter = new   FileAsync ('db.json');
    db= await lowdb(adapter)
     db.defaults({proveedores:[]}).write();
   }


  const getConection =()=> db;
   
  module.exports = {
         createConection,
          getConection
  }