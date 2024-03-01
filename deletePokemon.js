const { Pokemon } = require("../db");

const deletePokemonController = async (id) => {
  try {
    if (!id) {
      throw new Error("ID is required");
    }

    const deletedPokemon = await Pokemon.destroy({
      where: {
        id: id,
      },
    });

    if (!deletedPokemon) {
      throw new Error("Pokemon not found");
    }

    return deletedPokemon;
  } catch (error) {
    console.error("Error: ", error.message);
    throw error;
  }
};

module.exports = deletePokemonController;
