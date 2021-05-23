
exports.consultarBienvenida = (req,res) =>{
     console.log('ok consulta');
              res.json({bienvenida: "Bienvenido Candidato 01", version: "1.0"})
}