// = imports =
require('dotenv').config();

const { ENVIRONMENT = 'dev', PORT = 3001 } = process.env;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MSG_SID;
const phoneNumber = process.env.PHONENUMBER;
const ENV = {accountSid, authToken, messagingServiceSid, phoneNumber}

const { PrismaClient } = require('@prisma/client');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const teachers = require('./routes/teachers');
const students = require('./routes/students');
const assignments = require('./routes/assignments');
const submissions = require('./routes/submissions');
const sendAlerts = require('./routes/sendAlerts');


// = server setup =
const app = express();
const prisma = new PrismaClient();
const client = require('twilio')(accountSid, authToken);

app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

app.use('/teachers', teachers(prisma));
app.use('/students', students(prisma));
app.use('/assignments', assignments(prisma));
app.use('/submissions', submissions(prisma));
app.use('/sendAlerts', sendAlerts(ENV, client));

// = generic endpoints =
app.get('/', (req, res) => {
	res.json({ greetings: 'hello world?' });
});

app.get('*', (req, res) => {
	res.redirect(404, '/');
});


// = start server =
app.listen(PORT, () => console.log(`Server is listening on port ${PORT} 😎`));