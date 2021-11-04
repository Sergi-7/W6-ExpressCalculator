const initializeServer = require("./server/index");
require("dotenv").config();

const port = process.env.SERVER_PORT;

initializeServer(port);
