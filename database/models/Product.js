module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        product: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
        images: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        tip_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
        },
    };

    const Product = sequelize.define(alias, cols, { timestamps: false });

    Product.associate = function (models) {
        Product.belongsTo(models.Tip, {
            as: "tip",
            foreignKey: "tip_id",
        });
    };

    return Product;
};
