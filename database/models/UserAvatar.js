module.exports = function(sequelize, DataTypes) {
    let alias = "UserAvatar";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }

    let config = {
        tableName: "avatars",
        timestamps: false,
    }
    
    let UserAvatar = sequelize.define(alias, cols, config);

    UserAvatar.associate = function(models) {
        UserAvatar.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "user_id",   
        })
    }

    return UserAvatar;
}