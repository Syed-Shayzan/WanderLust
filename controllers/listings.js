const Listing = require("../models/Listing");
const maptilerClient = require("@maptiler/client");
const mapToken = process.env.MAP_TOKEN;
maptilerClient.config.apiKey = mapToken;

module.exports.renderNewForm = (req, res) => {
        return res.render("listing/new.ejs");
    };

module.exports.index = async (req, res) => {
        let { category, search } = req.query;
        let filter = {};

        //Search
        if (search && search.trim() !== "") {
            filter.$or = [
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" }}
            ];
        }

        // Icon
        if (category && category.trim() !== "") {
            filter.category = category;
        }

        const allListings = await Listing.find(filter);
        return res.render("listing/index.ejs", { allListings });
    };

    module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let singleListing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!singleListing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listing");
    }
    return res.render("listing/show.ejs", { singleListing });
    };

    module.exports.createListing = async (req, res, next) => {
    let response = await maptilerClient.geocoding.forward(req.body.listing.location,{
        limit: 1,
    });
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = req.body.listing;
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.features[0].geometry;
    await Listing.create(newListing);
    req.flash("success", "New Listing Created!");
    return res.redirect("/listing");
    };

    module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    let editListing = await Listing.findById(id);
    if (!editListing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listing");
    }
    let originalImageUrl = editListing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250,w_380");
    res.render("listing/edit.ejs", { editListing, originalImageUrl });
    };

    module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listing/${id}`);
    };

    module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listing");
};
