// import { Product } from "../models"

const { Product } = require("../models")
let data = [{
    "id": 1,
    "descProduct": "Crispy dill pickles that are perfect for snacking or sandwiches.",
    "productName": "Dill Pickle Chips"
  }, {
    "id": 2,
    "descProduct": "Nutty and chewy black rice, high in antioxidants.",
    "productName": "Organic Black Rice"
  }, {
    "id": 3,
    "descProduct": "A spicy glaze made with sriracha and honey, perfect for meats.",
    "productName": "Sriracha Honey Glaze"
  }, {
    "id": 4,
    "descProduct": "A healthy vegan cheese alternative packed with nutrients and flavor.",
    "productName": "Nutritional Yeast"
  }, {
    "id": 8,
    "descProduct": "A hearty salad with lentils, veggies, and curry dressing.",
    "productName": "Curried Lentil Salad"
}]

class ProductControllers {


    static async getDataById(req, res) {
        try {
            let {id} = req.params // ini boleh
            let idNumber = Number(id)
            let dataById = await Product.findByPk(idNumber)

            res.status(200).json(dataById)
        } catch (error) {
            res.status(500).json(error)
        }
        
    }

    static async getAllData(req, res) {
        try {
            let data = await Product.findAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
        
    }

    static async addProduct(req, res) {
        try {
            const {descProduct, productName} = req.body
            let inputData = {
                descProduct, 
                productName : productName
            }
            
            const addData = await Product.create(inputData)

            res.status(201).json("Success Added")
        } catch (error) {
            res.status(500).json(error)
        }
        
    }

    static editProduct(req, res) {
        // harus ambil dulu id yang mau di ambil
        let id = +req.params.id
        // kita tampung value yang baru
        let inputUserNameProduct = req.body.nameProduct

        let tampData = []
        // Maniuplasi data yang diambil dari id diganti dengan value baru
        data.forEach(el => {
            if (el.id == id) {
                el.productName = inputUserNameProduct
                tampData.push(el)
            }else {
                tampData.push(el)
            }
            
        })
        
        // re-assign dataMaster
        data = tampData
        res.status(200).json(data)
    }

    static async deleteProduct(req, res) {
        try {
            let id = req.params.id

            let dataResponse = await Product.destroy({
                where: {
                    id
                }
            })
            console.log(dataResponse);
            

            res.status(200).json("Data has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = ProductControllers