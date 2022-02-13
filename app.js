// Routing Endpoint GET
// Express JS
// Nodeman
// EJS

const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

app.get("/", (req, res) => {
  const cars = [{ name: "Ford" }, { name: "Audi" }, { name: "Mazda" }];

  res.render("index", {
    name: "Nanda Hady Mulya",
    age: 24,
    cars: cars,
  });
});

app.get("/:name", (req, res) => {
  res.send(`Hai, ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
