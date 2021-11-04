const express = require("express");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Servidor en : ${port}`);
  });
};

module.exports = initializeServer;
