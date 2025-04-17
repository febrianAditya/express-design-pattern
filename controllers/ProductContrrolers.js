
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


    static getDataById(req, res) {
        let {id} = req.params // ini boleh
        let idNumber = Number(id)


        let result = data.find(el => {
            return el.id === idNumber
        })

        res.status(200).json(result)
    }

    static getAllData(req, res) {
        res.status(200).json(data)
    }

    static addProduct(req, res) {
        const {descProduct, nameProduct} = req.body
        let inputData = {
            descProduct, 
            productName : nameProduct
        }
        
        let idManipulate = data[data.length-1].id + 1
        inputData.id = idManipulate
    
        data.push(inputData)

        res.status(201).json(data)
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

    static deleteProduct(req, res) {
        let id = req.params.id
        let result = data.filter(el => {
            return el.id != id
        })
        data = result

        res.status(200).json("succes deleted")  
    }
}

module.exports = ProductControllers