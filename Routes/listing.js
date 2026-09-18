const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

//new Route
router.get("/new",isLoggedIn, listingController.renderNewForm);

//Index and Create Route
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listingController.createListing));

//Show, update, and Destroy Route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//edit Route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;