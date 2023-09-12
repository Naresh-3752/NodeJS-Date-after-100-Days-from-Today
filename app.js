const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  const result = addDays(date.getFullYear(), date.getMonth(), date.getDay());
  response.send(
    `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
