const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const db = require('./data/dbHelpers');

const server = express();

server.use(express,json());
server.use(cors());

const PORT = 3000;

server.listen(PORT, console.log(`Listening to ${PORT}`));