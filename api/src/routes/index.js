const { Router } = require("express");

const getPokemonsHandler = require("../handlers/getPokemonsHandler");
const getPokemonByIdHandler = require("../handlers/getPokemonByIdHandler");
const getPokemonByNameHandler = require("../handlers/getPokemonByNameHandler");
const createPokemonHandler = require("../handlers/createPokemonHandler");
const getTypeHandler = require("../handlers/getTypeHandler");
const createTypeHandler = require ("../handlers/createTypeHandler");

const router = Router();

router.get("/pokemons/name", getPokemonByNameHandler);

router.get("/pokemons", getPokemonsHandler);

router.post("/type", createTypeHandler);

router.post("/pokemons", createPokemonHandler);

router.get("/pokemons/type", getTypeHandler);

router.get("/pokemons/:id", getPokemonByIdHandler);

module.exports = router;
