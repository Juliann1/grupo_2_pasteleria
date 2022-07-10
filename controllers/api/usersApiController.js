const { User } = require("../../database/models");

const usersApiController = {
    list: async (req, res) => {
        const users = await User.findAndCountAll({
            attributes: {
                exclude: ["user_password", "address", "phone"],
            },
        });

        let newUsers = {
            count: users.count,
            users: users.rows,
        }

        newUsers['users'].forEach(user => {
            user.dataValues.detail = `http://localhost:3030/users/${user.id}`
        }) 
        
        res.json(newUsers);
    },
};

module.exports = usersApiController;
