const route = require("express").Router()
const ProductControllers = require("../controllers/ProductContrrolers")

// routing get data all
route.get("/", ProductControllers.getAllData)

// routing get data by id
route.get("/:id", ProductControllers.getDataById)

// routing tambah product
route.post("/", ProductControllers.addProduct)

// routing edit product
route.patch("/api/product/:id", ProductControllers.editProduct)

// routing delet product
route.delete("/:id", ProductControllers.deleteProduct)

route.get("/api/product", (req, res) =>{
    console.log(req.query, "==> ini query");
})



module.exports = route