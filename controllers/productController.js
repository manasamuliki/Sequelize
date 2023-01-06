const db = require('../models');
// Import our main model

const Product = db.products
const Review = db.reviews



// Main Work

// 1.Create Product (or add ypur product)

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published? req.body.published : false
    }

    console.log(JSON.stringify(info))
    //console.log(Product);
    

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product);
}

// 2. Get all products

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

// 3. Get single product

const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where:  {id: id}})
    res.status(200).send(product)
}

// 4. Update product

const updateProduct = async (req, res) => {

    let id = req.params.id
     const product = await Product.update(req.body, {where: {id: id}})
     res.status(200).send(product)
  
}

// 5. Delete product

const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where:  {id: id}})
    res.status(200).send('Product is deleted')
}


// 6. connect one to many relationship between product and reviews
      
const getProductReviews = async(req, res) => {
    //const Review = db.reviews
    const data = await Product.findAll({
        include: [{
              model: Review,
              as: 'review'   
        }],
        where: {id:3}
    })
    res.status(200).send(data)
}   





module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getProductReviews

}