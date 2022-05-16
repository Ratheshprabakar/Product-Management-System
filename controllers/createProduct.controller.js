const db = require("../database/db");

const createProduct = async (req, res) => {
  const product = req.body.product;
  const result = await db.query(
    `INSERT into PRODUCTS(NAME,CODE,DESCRIPTION,AMOUNT) values('${product.name}','${product.code}','${product.description}',${product.amount});`
  );
  return result;
};

module.exports = {
  createProduct: createProduct,
};
