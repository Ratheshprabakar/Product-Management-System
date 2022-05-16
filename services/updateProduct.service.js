const updateProduct = require("../controllers/updateProduct.controller");

const updateProductService = async (req, res) => {
  const result = await updateProduct.updateProduct(req, res);
  if (result.affectedRows) {
    res.json({ status: 200, message: "Updated Successfully" });
  } else {
    res.json({ status: 400, message: "Error occurred during update product" });
  }
};

module.exports = { updateProductService: updateProductService };
