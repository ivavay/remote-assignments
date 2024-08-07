const express = require("express");
const app = express();
// Parse requests with JSON payloads
app.use(express.json());
// Define the server code
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, My Server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
