const db = require('../database/models')
const sequelize = db.sequelize;

const usersApiController = {
    lista: (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => {
                
                usuarios.forEach(row=>{
                    row.contrasenia = undefined;
                    row.rol_id = undefined;
                    
                })
                let respuesta = {
                
                    count: usuarios.length,
                    data: usuarios,
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
module.exports = usersApiController;

/**/