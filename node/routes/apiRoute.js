const express = require("express");
const userController = require("../controllers/ApiController");
const router = express();

router.post("/api", userController.getApi);

router.post("/postapi", userController.getComments);

module.exports = router;