const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError= require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isReviewAuthor, validateReview} = require("../middleware.js"); //validateReview hataya h
const reviewController =  require("../controllers/reviews.js");

//post review route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview)); //validate review hataya h

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
