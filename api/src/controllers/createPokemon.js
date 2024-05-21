const { Pokemon, Type } = require("../db.js");
const axios = require('axios');

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const createPokemon = async ({ name, image, life, attack, defense, speed, height, weight, types }) => {
  try {
    console.log('Checking if Pokemon already exists in the API...');
    const response = await axios.get(`${baseUrl}${name.toLowerCase()}`);
    if (response.data) {
      console.log('Pokemon already exists in the API.');
      throw Error("Pokemon with this name already exists");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('Pokemon does not exist in the API. Proceeding...');
    } else {
      console.error('Error checking API:', error.message);
      throw error;
    }
  }

  console.log('Checking if Pokemon already exists in the database...');
  const existingPokemon = await Pokemon.findOne({ where: { name: name } });
  if (existingPokemon) {
    console.log('Pokemon already exists in the database.');
    throw Error('Pokemon with this name already exists in the database');
  }

  console.log('Creating Pokemon in the database...');
  let typesInstances = [];

  for (let typeName of types) {
    let [typeInstance, created] = await Type.findOrCreate({ where: { name: typeName } });
    typesInstances.push(typeInstance);
  }

  let newPokemon = await Pokemon.create({
    name,
    image,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  });

  await newPokemon.setTypes(typesInstances);

  console.log('Pokemon created successfully.');
  return newPokemon;
};

module.exports = createPokemon;