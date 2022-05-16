const db = require("../database/db");

const deleteProduct = async (req,res)=>{
    const result = db.query(`DELETE FROM PRODUCTS WHERE ID = ${req.params.id}`)
    return result;
}

module.exports = {
    deleteProduct:deleteProduct
}