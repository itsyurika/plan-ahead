// imports
require('dotenv').config()
const { ENVIRONMENT = 'dev', PORT = 8080 } = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// import routes
const assignmentsRoutes = require('./routes/assignmentsRoutes');
const studentsRoutes = require('./routes/studentsRoutes');

// = server setup =
const app = express();

// = middleware =
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

// = routes=
app.use('/assignments', assignmentsRoutes());
app.use('/students', studentsRoutes());


app.get('/', (req, res) => {
	res.json({greetings: 'hello world?'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} 😎`));