const express = require("express");

// const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://server:3000"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists



app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodeapp application." });
});

require("./app/routes/turorial.routes")(app);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}.`);
});
