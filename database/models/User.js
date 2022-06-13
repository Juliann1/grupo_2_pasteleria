module.exports = function(sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING(30)
        },
        first_name: {
            type: DataTypes.STRING(30),
        },
        last_name: {
            type: DataTypes.STRING(30)
        },
        pasword: {
            type: DataTypes.STRING(60)
        },
        birthday: {
            type: DataTypes.DATE
        },
        email_id: {
            type: DataTypes.INTEGER
        },
        address_id: {
            type: DataTypes.INTEGER
        },
        phone_id: {
            type: DataTypes.INTEGER
        },
        avatar_id: {
            type: DataTypes.INTEGER
        },
        // cc_id: {
        //     type: DataTypes.INTEGER
        // },
    }

    let config = {
        tableName: "users",
        timestamps: false,
    }
    
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasOne(models.UserEmail, {
            as: "email",
            foreignKey: "email_id", 
        })
        User.hasOne(models.UserAddress, {
            as: "address",
            foreignKey: "address_id", 
        })
        User.hasOne(models.UserPhone, {
            as: "phone",
            foreignKey: "phone_id", 
        })
        User.hasOne(models.UserAvatar, {
            as: "avatar",
            foreignKey: "avatar_id", 
        })


    }

    return User;
}