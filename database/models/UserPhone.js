module.exports = function(sequelize, DataTypes) {
    let alias = "UserPhone";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        phone: {
            type: DataTypes.STRING(16)
        },
        user_id: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }
    }

    let config = {
        tableName: "phones",
        timestamps: false,
    }
    
    let UserPhone = sequelize.define(alias, cols, config);

    UserPhone.associate = function(models) {
        UserPhone.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "user_id",   
        })
    }

    return UserPhone;
}