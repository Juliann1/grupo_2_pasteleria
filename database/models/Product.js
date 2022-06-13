module.exports = function(sequelize, DataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50)
        },
        info: {
            type: DataTypes.STRING(100)
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING(255)
        },
        tip_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }
    
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.hasOne(models.ProductTip, {
            as: "tip",
            foreignKey: "tip_id",   
        })
    }

    return Product;
}