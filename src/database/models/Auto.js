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
        fk_color: dataTypes.BIGINT(10),
        anio: {
            type: dataTypes.BIGINT(4).UNSIGNED,
            allowNull: false
        },
        
    };
    let config = {
            
    }
    const Auto = sequelize.define(alias, cols, config)

    Auto.associate = function(models){
        Auto.belongsTo(models.Color, {
            as: 'color',
            foreignKey:'fk_color'
        })
    }
}