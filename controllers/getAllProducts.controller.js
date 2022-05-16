const db = require("../database/db");

const getAllProducts = async (req, res) => {
  const result = await db.query("SELECT * from PRODUCTS");
  //   res.json(result);
  return result;
};

module.exports = {
  getAllProducts: getAllProducts,
};
