const db = require('../database/models')
const sequelize = db.sequelize;

const productApiController = {
    lista: (req, res) => {
        db.Auto.findAll()
            .then(productos => {
                let autos = []
                productos.forEach(producto=>{
                   //db.Color.findByPk(producto.color_id).then(color=>{}) 
                    //console.log(color)
                    autos.push({
                        modelo : producto.modelo,
                        precio : producto.precio,
                        anio : producto.anio,
                        url : 'detalleDelProducto/'+producto.id_auto
                    })
                
                    
                })
                let respuesta = {
                
                    count: productos.length,
                    data: autos,
                    status: 200,
                    //array: [db.id_usuario, db.nombre, db.email,]
                }
                return res.json(respuesta)
            
                   })
                              
    },
    detail:(req,res)=>{
        console.log(req.params)
        db.Usuario.findByPk(req.params.id)
        .then(usuario=>{
            usuario.rol_id=undefined;
            usuario.contrasenia=undefined;
            return res.json(usuario)

        })   
    }
}
module.exports = productApiController;
