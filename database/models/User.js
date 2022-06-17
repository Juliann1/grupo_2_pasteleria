module.exports = function(sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        pasword: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        email_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        address_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        phone_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        avatar_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
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