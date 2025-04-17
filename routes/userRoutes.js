const route = require("express").Router()
const UserContrrolers = require("../controllers/UserContrrolers")

route.post("/login", UserContrrolers.userLogin)


route.get("/cek", (req, res) => {
    res.send("sampai ke sini yaa")
})

module.exports = route