module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id_usuario: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        mail: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        fdn: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        id_rol:  dataTypes.BIGINT(10)
    };
    let config = {

    }
    const Usuario = sequelize.define(alias,cols, config);
    Usuario.associate = function(models){
        Usuario.belongsTo(models.Rol, {
            as : "rol",
            foreignKey:"id_rol"
        })
        Usuario.hasMany(models.Venta, {
            as: "ventas",
            foreignKey:"id_usuario"
        })
    }
    return Usuario
}