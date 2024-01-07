const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cookieValidator = require("./cookieValidator");

// first middleware
const myLogger = function (req, res, next) {
  console.log("Logged");
  next();
};

app.use(myLogger);
app.get("/", (req, res) => {
  res.send("Hello world...");
});

// second middleware
const requestTime = function (req, res, next) {
  console.log((req.requestTime = Date.now().toLocaleString()));
  next();
};

app.use(requestTime);
app.get("/time", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requeted at: ${req.requestTime}</small>`;
  res.send(responseText);
});

// third middleware
async function validateCookies(req, res, next) {
  await cookieValidator(req.cookies);
  next();
}

app.use(cookieParser());

app.use(validateCookies);

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

app.listen(3002);
