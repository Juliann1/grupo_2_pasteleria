module.exports = function(sequelize, DataTypes) {
    let alias = "UserAddress";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        // province_id: {
        //     type: dataTypes.INTEGER
        // },
        // city: {
        //     type: DataTypes.STRING
        // },
        // zip_code: {
        //     type: DataTypes.INTEGER
        // },
    }

    let config = {
        tableName: "addresses",
        timestamps: false,
    }
    
    let UserAddress = sequelize.define(alias, cols, config);

    UserAddress.associate = function(models) {
        UserAddress.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "user_id",   
        })
    }

    return UserAddress;
}