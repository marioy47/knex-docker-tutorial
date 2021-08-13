// index.js
const express = require("express");

const app = express();
const port = process.env.PORT || "8080";

app.use(express.json());

app.get("/", (req, res) => {
  const json = JSON.stringify({ error: false, message: "Hello World" });
  res.end(json);
});

app.listen(parseInt(port), () => {
  console.log(`Express listening on port ${port}`);
});
