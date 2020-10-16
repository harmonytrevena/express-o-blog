'use strict'

const http = require("http");

const hostname = "127.0.0.1";
const port = 3333;

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const logger = morgan("tiny");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept"
};

const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(cors(corsOptions));


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require("./routes/index");
const tasksController = require("./routes/tasks");

app.use("/", rootController);
app.use("/tasks", tasksController);