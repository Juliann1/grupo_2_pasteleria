module.exports = (sequelize, dataTypes) => {
    let alias = "Shipping";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        shipping: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
    };
    const Shipping = sequelize.define(alias, cols, { timestamps: false });

    return Shipping;
};
