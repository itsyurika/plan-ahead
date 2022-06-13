// = imports =
require('dotenv').config();
require('express-async-errors');

const { ENVIRONMENT = 'dev', PORT = 3001 } = process.env;
const { PrismaClient } = require('@prisma/client');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const teachers = require('./routes/teachers');
const students = require('./routes/students');
const assignments = require('./routes/assignments');


// = server setup =
const app = express();
const prisma = new PrismaClient();

app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

app.use('/teachers', teachers(prisma));
app.use('/students', students(prisma));
app.use('/assignments', assignments(prisma));


// = generic endpoints =
app.get('/', (req, res) => {
	res.json({ greetings: 'hello world?' });
});

app.get('*', (req, res) => {
	res.redirect(404, '/');
});


// = start server =
app.listen(PORT, () => console.log(`Server is listening on port ${PORT} 😎`));