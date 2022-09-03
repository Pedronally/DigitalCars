module.exports = (sequelize, dataTypes) => {
    let alias = 'Auto';
    let cols ={
        id_auto: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        modelo: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        
        anio: {
            type: dataTypes.BIGINT(4).UNSIGNED,
            allowNull: false
        },
        
    };
    let config = {
            tableName : "autos",
            timestamps: false
 
    }
    const Auto = sequelize.define(alias, cols, config)

    Auto.associate = function(models){
        Auto.belongsTo(models.Color, {
            as: 'colores',
            foreignKey:'color_id'
        })
        Auto.hasMany(models.Venta,{
            as:"ventas",
            foreignKey:"id_auto"
        })
    }
    return Auto;
}