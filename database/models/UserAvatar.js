module.exports = function(sequelize, DataTypes) {
    let alias = "UserAvatar";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        avatar: {
            type: DataTypes.STRING(40)
        },
        user_id: {
            type: DataTypes.INTEGER
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