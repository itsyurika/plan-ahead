// = imports =
require('dotenv').config()
const { ENVIRONMENT = 'dev', PORT = 8080 } = process.env;
const { PrismaClient } = require('@prisma/client');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const assignmentsRoutes = require('./routes/assignmentsRoutes');
const studentsRoutes = require('./routes/studentsRoutes');


// = server setup =
const app = express();
const prisma = new PrismaClient();


// = middleware =
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());


// = routes=
app.use('/assignments', assignmentsRoutes(prisma));
app.use('/students', studentsRoutes(prisma));

app.get('/', (req, res) => {
	res.json({greetings: 'hello world?'});
})

app.get('*', (req, res) => {
	res.redirect(404, '/');
});


// = start server =
app.listen(PORT, () => console.log(`Server is listening on port ${PORT} 😎`));