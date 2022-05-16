const db = require("../database/db");

const updateProduct = async (req, res) => {
  const product = req.body.product;
  const result = await db.query(
    `UPDATE PRODUCTS SET NAME='${product.name}',CODE='${product.code}',DESCRIPTION='${product.description}',AMOUNT=${product.amount} WHERE ID=${req.params.id}`
  );
  return result;
};

module.exports = {
  updateProduct: updateProduct,
};
