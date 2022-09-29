module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id_usuario: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        contrasenia: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        fdn: {
            type: dataTypes.DATE,
            allowNull: false
        },
        foto: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        tableName : "usuarios",
            timestamps: false
       
    }
    const Usuario = sequelize.define(alias,cols, config);
    Usuario.associate = function(models){
        Usuario.belongsTo(models.Rol, {
            as : "roles",
            foreignKey:"rol_id"
        })
        /*Usuario.hasMany(models.Venta, {
            as: "ventas",
            foreignKey:"id_usuario"
        })
    */
    }
    return Usuario;
}