const getAllProducts = require("../controllers/getAllProducts.controller");

const getAllProductsService = async (req, res) => {
  const result = await getAllProducts.getAllProducts(req, res);
  res.json(result);
};
module.exports = {
    getAllProductsService: getAllProductsService,
};
