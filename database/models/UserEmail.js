module.exports = function(sequelize, DataTypes) {
    let alias = "UserEmail";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(255)
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "emails",
        timestamps: false,
    }
    
    let UserEmail = sequelize.define(alias, cols, config);

    UserEmail.associate = function(models) {
        UserEmail.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "user_id",   
        })
    }

    return UserEmail;
}