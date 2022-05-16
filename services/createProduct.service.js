const createProduct = require("../controllers/createProduct.controller");

const createProductService = async (req, res) => {
  const result = await createProduct.createProduct(req, res);
  try {
    if (result.affectedRows) {
      res.json({ status: 200, message: "Inserted Successfully" });
    } else {
      res.json({
        status: 400,
        message: "Something went wrong, Data not inserted properly",
      });
    }
  } catch {
    res.json({
      status: 400,
      message: "Something went wrong, Data not inserted properly",
    });
  }
};

module.exports = {
  createProductService: createProductService,
};
