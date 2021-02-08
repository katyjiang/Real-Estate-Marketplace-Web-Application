const express = require("express");
const router = express.Router();

const Utils_Auth = require('../utils/Auth');
var auth = new Utils_Auth();


router.post('/register-buyer', async (req, res) => {
    await auth.userRegister(req.body, res);
});

router.post('/login-buyer', async (req, res) => {
    await auth.userLogin(req.body, res);
});

router.post('/favorite', async (req, res) => {
    await auth.favoriteListing(req.body.userId, req.body.listingId, res);
});

router.post('/favoriteSearch', async (req, res) => {
    console.log("this is the body");
    console.log(req.body.params);
    await auth.favoriteSearch(req.body.userId, req.body.newFav, res);
});

router.get('/favorite-listing-get', async (req, res) => {
    await auth.favoriteListingGet(req.body.userId, res);
}); 


module.exports = router;
