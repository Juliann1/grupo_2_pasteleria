module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.TINYINT(3).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        category: {
            type: dataTypes.STRING(15),
            allowNull: false,
        },
    };

    const Category = sequelize.define(alias, cols, { timestamps: false });

    return Category;
};
