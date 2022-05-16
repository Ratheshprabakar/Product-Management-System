const express = require("express");
const createProductService = require("../services/createProduct.service");
const deleteProductService = require("../services/deleteProduct.service");
const getAllProductsService = require("../services/getAllProducts.service");
const getAProductService = require("../services/getAProduct.service");
const updateProductService = require("../services/updateProduct.service");
const router = express.Router();

router.route("/").get(getAllProductsService.getAllProductsService);

router.route(":/id").get(getAProductService.getAProductService);

router.route("/").post(createProductService.createProductService);

router.route("/:id").put(updateProductService.updateProductService);

router.route("/:id").delete(deleteProductService.deleteProductService);


module.exports=router;
