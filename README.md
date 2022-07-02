# Plan Ahead (LHL Finals Apr 04, 2022)

Single Page App designed to help teachers, young students and those with learning disabilities keep track of their assignments and due dates. \
Utilizes a back-end Server API built with Express Node.js and PostgreSQL, and a front-end interface built with React.js.

## Contributors 

**Yuri Yang** - Product Owner, Developer ([@itsyurika](https://github.com/itsyurika)) \
**Ben Finlay** - Developer ([@Ben-Finlay](https://github.com/Ben-Finlay)) \
**Jordan Ciurcovich** - Developer ([@symphony](https://github.com/symphony)) \
**Minah Lee** - Designer (Portfolio by [@mmlleeee](https://www.minahlee.art/)) 

## Demo

A live demo can be found on Heroku - [Plan Ahead Live Demo](https://plan-ahead.herokuapp.com)

### Homepage 

<img alt="Plan Ahead Homepage" src="_docs/01-homepage.png?raw=true" name="Homepage" width="800"></img>

### Student Calendar

<img alt="Student Calendar View" src="_docs/02-student-calendar.png?raw=true" name="Student Calendar" width="800"></img>

### Assignment Card View

<img alt="Assignment Card View" src="_docs/03-card-view.png?raw=true" name="Assignment Card View" width="800"></img>

### Teacher Dashboard

<img alt="Teacher's Dashboard" src="_docs/04-teacher-dashboard.png?raw=true" name="Teacher Dashboard" width="800"></img>

### Assignment Edit

<img alt="Edit Assignment view" src="_docs/05-assignment-edit.png?raw=true" name="Assignment Edit" width="800"></img>

---

## Usage

Clone and CD into Project Folder:

`git clone git@github.com:itsyurika/plan-ahead.git plan-ahead && cd plan-ahead`

The project consists of back-end Server, and front-end Client each with independent folders and dependencies. \
To run the application, first we will set up the back-end database and API. 

## Set up the Database

Our development environment connects the server to a local instance of PostgreSQL. If another DB is preferred it can be configured in the .env file.

To set up the database you will need PostgreSQL installed on your host machine and a PSQL account with admin permissions.

Instructions can be found here: [Installing Postgres](https://www.postgresguide.com/setup/install)

Once inside PSQL in your terminal create the database \
`CREATE DATABASE planner_development;`

Exit PSQL \
`\q`

## Set up Server API

CD into Server folder \
`cd server`

Install Server dependencies \
`npm i`

Create .env file from template \
`cp .env.example .env` 

Seed the database with \
`npm run db:reset`

Start the Server \
`npm start`

## Set up Client

From another terminal, CD into the Client folder \
`cd client`

Install Server dependencies \
`npm i`

Run the client \
`npm start`

Visit the App in your browser at http://localhost:3000

## Client Dependencies

* @testing-library/jest-dom 5.x
* @testing-library/react 13.x
* @testing-library/user-event 13.x
* react 18.x
* react-dom 18.x
* react-scripts 5.x
* react-burger-menu 3.x
* react-datepicker 4.x
* web-vitals 2.x
* axios 0.27.x
* date-fns 2.x
* normalize.css 8.x
* classnames 2.x
* sass 1.5x
    
## Server Dependencies
    
* @prisma/client 3.x
* express 4.x
* prisma 3.x
* dotenv 16.x
* twilio 3.x
* express-async-errors 3.x
* body-parser 1.2x
* nodemon 2.x
* morgan 1.x

## Resources

* Program - [Full-Stack Web Development Bootcamp](https://www.lighthouselabs.ca/en/web-development-bootcamp) ([@lighthouse-labs](https://github.com/lighthouse-labs))

\- Thank you for visiting our project -