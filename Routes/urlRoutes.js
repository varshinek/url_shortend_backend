const express = require("express");
const { getAllURLs, createShortURL, countAndRedirect, deleteURL } = require("../Contorllers/URLsController");
const auth = require("../Middleware/auth");

const router = express.Router();

router.get('/get',auth,getAllURLs);

router.post('/create',auth,createShortURL);

router.get('/redirect/:shortURL',auth,countAndRedirect);

router.delete('/delete/:UrlId',auth,deleteURL)

module.exports = router;
