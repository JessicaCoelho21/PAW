var mongoose = require("mongoose");
var Review = require("../models/Reviews");

var reviewController = {};

/*
reviewController.list = async function(req, res) {
    try {
        const reviewList = await Employee.find()
        res.render('reviews', { reviews: reviewList })
    } catch (e) {
        res.render('reviews', { review: [] })
    }
};

reviewController.create = async function(req, res) {
    res.render("reviews/create");
}

reviewController.save = async function(req, res) {
    try {
        const result = await Review.create(req.body)
        res.redirect(`/reviews/show/${ result._id }`)
    } catch (e) {
        res.send('error')
    }
};
*/

module.exports = ReviewController;