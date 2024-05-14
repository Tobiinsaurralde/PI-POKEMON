const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = 3002;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`); 
  });
});