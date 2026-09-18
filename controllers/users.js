const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try{
    let {username, email, password} = req.body;
    let newUser = {username, email};
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Welcome to WanderLust!");
        res.redirect("/listing");
    })
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    };
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "welcome back to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if(err){
        return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listing");
    });
};

