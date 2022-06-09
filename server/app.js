//declarations
require('dotenv').config()
const { ENVIRONMENT, PORT } = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// db connection


//routes import
const assignmentsRoutes = require('./routes/assignmentsRoutes');
const studentsRoutes = require('./routes/studentsRoutes');

const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

//routes
app.use('/assignments', assignmentsRoutes());
app.use('/students', studentsRoutes());


app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} 😎`));