var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Wellcome to Pokemon World");
});

const pokemonRouter = require("./pokemon-api.js");
router.use("/pokemons", pokemonRouter);

module.exports = router;
