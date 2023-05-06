const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
