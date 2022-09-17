const db = require('../database/models')
const sequelize = db.sequelize;

const usersApiController = {
    'lista': (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => {
                return res.json({
                    total: usuarios.length,
                    //data: usuarios,
                    //status: 200,
                    //array: [db.id_usuario, db.nombre, db.email,]
                })
                
            })
    }
}
module.exports = usersApiController;

