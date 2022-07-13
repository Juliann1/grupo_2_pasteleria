const db = require("../../database/models");

const productsApiController = {
    list: async (req, res) => {
        const products = await db.Product.findAndCountAll({
            include: ["category"],
        });

        const categroryArr = products["rows"].map(
            (e) => (e.category = e.category.category)
        );
        let categories = categroryArr.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
        }, {});

        newProducts = {
            count: products["count"],
            countByCategory: categories,
            products: products["rows"],
        };

        res.json(newProducts);
    },
    // detail: async (req, res) => {
    // }
};

module.exports = productsApiController;
