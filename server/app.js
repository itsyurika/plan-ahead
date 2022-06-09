//declarations
require('dotenv').config()
const { ENVIRONMENT, PORT } = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//routes import
const assignmentsRoutes = require('../routes/assignmentsRoutes');

const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

//routes
app.use('/assignments', assignmentsRoutes());



app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(8080, () => console.log(`Server is listening on port ${8080} 😎`));