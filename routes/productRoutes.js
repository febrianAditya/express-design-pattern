const route = require("express").Router()
const ProductControllers = require("../controllers/ProductContrrolers")

// routing get data all
app.get("/api/products", ProductControllers.getAllData)

// routing get data by id
route.get("/:id", ProductControllers.getDataById)

// routing tambah product
app.post("/api/products", ProductControllers.addProduct)

// routing edit product
app.patch("/api/product/:id", ProductControllers.editProduct)

// routing delet product
app.delete("/api/product/:id", ProductControllers.deleteProduct)

app.get("/api/product", (req, res) =>{
    console.log(req.query, "==> ini query");
})



module.exports = route