const db = require('../models')

// Import our model

const Review = db.reviews

// Functions 
//1. addReview

const addReview = async (req, res) => {
    let data = {
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data)
    res.status(200).send(review)
}

// 2. Get All Reviews

const getAllReviews = async (req, res) => {
    const reviews = await Review.findAll({})
    res.status(200).send(reviews)
}

module.exports = {
    addReview,
    getAllReviews
}