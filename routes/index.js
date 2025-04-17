const route = require("express").Router()
const userRoutes = require("./userRoutes")
const productRoutes = require("./productRoutes")


route.use("/api/user", userRoutes)

route.use("/api/product", productRoutes)

 
module.exports = route


/**
 * 
 * buat folder routes
 * buat file index.js
 * define Router()
 * module.exports
 * 
 * panggil / tangkep di file server.js
 * pakai app.use(routes)
 * pindahin semua routingan yang ada di file server
 */