const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false, 
        primaryKey: true,
        unique: true,
      },
      
      name: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      life: { type: DataTypes.INTEGER, allowNull: false },
      attack: { type: DataTypes.INTEGER, allowNull: false },
      defense: { type: DataTypes.INTEGER, allowNull: false },
      speed: { type: DataTypes.INTEGER },
      height: { type: DataTypes.INTEGER },
      weight: { type: DataTypes.INTEGER },
      color: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
};