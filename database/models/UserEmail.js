module.exports = function(sequelize, DataTypes) {
    let alias = "UserEmail";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
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