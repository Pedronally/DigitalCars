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
                    data: autos,
                    categorias: categorias,
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
                        url : 'detalleDelProducto/'+producto.id_auto
                     }
            
            return res.json(respuesta)

        })   
    }
}
module.exports = productApiController;
