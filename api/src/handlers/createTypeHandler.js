const createType = require("../controllers/createType.js");

const createTypeHandler = async (req, res) => {

  console.log("Request Body:", req.body);

  const { name } = req.body;

  if (!name ) {
    console.log("Validation Error: Missing or invalid data");
    return res.status(400).send("Missing or invalid data");
  }

  try {
    const newType = await createType({
      name
    });

    res.status(200).json(newType);

  } catch (error) {
    console.log("Error:", error);

    if (error.message === "Type with this name already exists") {
      res.status(400).send(error.message);
    } else {
      res.status(500).send(error.message);
    }
  }
};

module.exports = createTypeHandler;