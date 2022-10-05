const db = require('../database/models')
const sequelize = db.sequelize;

const productApiController = {
    lista: (req, res) => {
        db.Auto.findAll({include: {association: 'colores'}})
            .then(productos => {        
                let autos = []
                productos.forEach(producto=>{
                   
                    autos.push({
                        modelo : producto.modelo,
                        precio : producto.precio,
                        anio : producto.anio,
                        color: producto.colores.color,
                        url : 'detalleDelProducto/'+producto.id_auto
                    })      
                })
                let usuarios = []
                db.Usuario.findAll().then(users=>{
                    users.forEach(usuario => {
                        usuarios.push(usuario)
                    })
                    
                })

            
                db.Color.findAll().then(colores=>{
                    let categorias = []
                    colores.forEach(color=>{
                   //     db.Auto.findAll({where:{color_id:color.id_color}}).then(autosXColor=>{ })
                           
                        categorias.push({
                            color: color.color,
                            //cantidad: autosXColor.length

                        })
                    })
                let respuesta = {
                
                    count: productos.length,
                    productos: autos,
                    categorias: categorias,
                    cantCategory: categorias.length,
                    cantUser:usuarios.length,
                    status: 200,
                }
                return res.json(respuesta)
            })
            
            })

                              
    },
    detail:(req,res)=>{
        console.log(req.params)
        db.Auto.findByPk(req.params.id,{include: {association: 'colores'}})
        .then(producto=>{
            let respuesta = {
                        modelo : producto.modelo,
                        precio : producto.precio,
                        anio : producto.anio,
                        color: producto.colores.color,
                        url : 'localhost:3050/productos/detalle'+producto.id_auto
                     }
            
            return res.json(respuesta)

        })   
    },
    lastProduct:(req,res)=>{
        db.Auto.findAll({include: {association: 'colores'}})
        .then(productos=>{
            console.log(productos);
            let producto = productos[productos.length-1];
            let respuesta = {
                        modelo : producto.modelo,
                        precio : producto.precio,
                        anio : producto.anio,
                        color: producto.colores.color,
                        url : 'localhost:3050/productos/detalle/'+producto.id_auto,
                        foto: 'C:/Users/matia/Desktop/TP Integrador/grupo_2_DigitalCars/public/images/'+producto.foto
                     }
                     return res.json(respuesta);
           

            })
            
    }
}
module.exports = productApiController;
