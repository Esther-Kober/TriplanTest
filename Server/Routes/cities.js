const express = require("express");
const citiesController = require("../controllers/cities");
const router = express.Router();

router.route("/getCities").get(async function (req, resp) {
        let data = await citiesController.getCities();
        return resp.json(data);
    })
    
module.exports = router;