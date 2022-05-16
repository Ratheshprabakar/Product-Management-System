const db = require("../database/db");

const getAProduct = async (req, res) => {
  const result = await db.query(
    `SELECT * from PRODUCTS where ID=${req.params.id}`
  );
  return result;
};

module.exports={
    getAProduct:getAProduct
}