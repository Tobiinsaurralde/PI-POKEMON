// Cargar variables de entorno desde un archivo .env
require('dotenv').config();

// Importar el objeto Sequelize de la biblioteca sequelize
const { Sequelize } = require('sequelize');

// Importar módulos del sistema de archivos y rutas de Node.js
const fs = require('fs');
const path = require('path');

// Extraer credenciales de la base de datos del archivo .env
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Crear una instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize(
   // Configuración de la URL de conexión
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // Establecer en console.log para ver las consultas SQL en bruto
      native: false, // Informa a Sequelize que podemos usar pg-native para ~30% más de velocidad
   }
);

// Obtener el nombre del archivo actual
const basename = path.basename(__filename);

// Crear un array para almacenar los modelos definidos en la carpeta 'models'
const modelDefiners = [];

// Leer todos los archivos de la carpeta 'models', requerirlos y agregarlos al array 'modelDefiners'
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Inyectar la conexión (sequelize) en todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizar los nombres de los modelos (p.ej., product => Product)
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Destructurar los modelos importados para facilitar su uso
const { Pokemon, Type } = sequelize.models;

// Definir relaciones entre los modelos (ejemplo: Pokémon tiene muchas relaciones con Tipo y viceversa)
Pokemon.belongsToMany(Type, { through: 'PokemonType' });
Type.belongsToMany(Pokemon, { through: 'PokemonType' });

// Exportar modelos y la conexión para su uso en otras partes de la aplicación
module.exports = {
   Pokemon,
   Type,
   conn: sequelize, 
};
