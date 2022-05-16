const getAProduct = require("../controllers/getAProduct.controller");

const getAProductService = async (req, res) => {
  const result = await getAProduct.getAProduct(req, res);
  if (result.length) {
    res.json(result);
  } else {
    res.json({
      status: 400,
      message: `No data found for this ${req.params.id}`,
    });
  }
};
module.exports = {
  getAProductService: getAProductService,
};
