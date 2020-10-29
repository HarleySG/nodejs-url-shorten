const express = require("express");
const json = express.json;
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = {
  cors,
  express,
  json,
  morgan,
  helmet,
};
