require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const knex = require('knex');

const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use(morgan('combined'));
server.use(compression());

server.listen(process.env.PORT || 3000, () => {
	console.log(`Server is running on port ${process.env.PORT||3000}`);
});
