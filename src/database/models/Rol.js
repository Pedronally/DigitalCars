module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id_rol: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        descripcion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    }
    let config = {
        timestamps:false,
        tableName:'roles'
       
    }
    const Rol = sequelize.define(alias,cols,config);
    Rol.associate = function(models){
        Rol.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey:"rol_id"
        })
    }
    return Rol;
}