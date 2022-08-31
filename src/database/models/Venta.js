module.exports = (sequelize, dataTypes) => {
    let alias = 'Venta';
    let cols = {
        id_venta: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        id_usuario:  dataTypes.BIGINT(10),
        id_auto:  dataTypes.BIGINT(10),
        importe: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        }  
        
    };
    let config = {

    }
    const Venta = sequelize.define(alias,cols, config);
    Venta.associate = function(models){
        Venta.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey:"id_usuario"
        })
        Venta.belongsTo(models.Auto, {
            as : "auto",
            foreignKey:"id_auto"
        })

    }
    return Venta;
}