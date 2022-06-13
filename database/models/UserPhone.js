module.exports = function(sequelize, DataTypes) {
    let alias = "UserPhone";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        number: {
            type: DataTypes.INTEGER
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