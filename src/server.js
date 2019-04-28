const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);

const DB_USER = process.env.DB_USER||''
const DB_PASS = process.env.DB_PASS||''
mongoose.connect(
    `mongodb://localhost:27017/teste`,
    { useNewUrlParser: true }
);


app.use(express.json());

app.use(require("./routes"));

server.listen(process.env.PORT || 3333);