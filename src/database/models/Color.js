module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id_color: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        color: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    }
    let config = {
        tableName : "colores",
            timestamps: false
       
    }
    const Color = sequelize.define(alias,cols,config);
    Color.associate = function(models){
        Color.hasMany(models.Auto, {
            as: "autos",
            foreignKey:"color_id"
        })
    }
    return Color;
}