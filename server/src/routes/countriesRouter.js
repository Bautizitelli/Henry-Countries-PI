const { Router } = require("express");
const { getCountryById, getCountryByName } = require("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/:idPais",getCountryById)

countriesRouter.get("/", getCountryByName)

module.exports = countriesRouter