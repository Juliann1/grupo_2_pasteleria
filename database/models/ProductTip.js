module.exports = function(sequelize, DataTypes) {
    let alias = "ProductTip";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tip: {
            type: DataTypes.STRING(255)
        },
    }

    let config = {
        tableName: "tips",
        timestamps: false,
    }
    
    let ProductTip = sequelize.define(alias, cols, config);

    ProductTip.associate = function(models) {
        ProductTip.belongsTo(models.Product, {
            as: "product",  
        })
    }

    return ProductTip;
}