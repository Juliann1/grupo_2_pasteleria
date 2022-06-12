module.exports = (sequelize, dataTypes) => {
    let alias = "Tip";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        tip: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
    };
    const Tip = sequelize.define(alias, cols, { timestamps: false });

    return Tip;
};
