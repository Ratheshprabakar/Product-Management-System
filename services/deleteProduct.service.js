const deleteProduct = require("../controllers/deleteProduct.controller");

const deleteProductService = async (req, res) => {
  const result = await deleteProduct.deleteProduct(req, res);
  if (result.affectedRows) {
    res.json({ status: 200, message: "Deleted Successfully" });
  } else {
    res.json({ status: 400, message: "Error Occurred during deletion" });
  }
};

module.exports = {
  deleteProductService: deleteProductService,
};
