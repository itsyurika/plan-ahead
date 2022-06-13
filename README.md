# Student Planner (LHL Finals Apr 04 2022)

Single Page app designed to help teachers and young students keep track of their assignments and due dates. Utilizes a back-end Server API built with Express Node.js and PostgreSQL, and a front-end interface built with React.js.

## Usage

Clone and CD into Project Folder:

`git clone git@github.com:itsyurika/LHL-final-project.git student-planner && cd student-planner`

The project consists of back-end Server, and front-end Client each with independent folders and dependencies. To run the application, first we will set up the back-end database and API. 

## Set up Server API

Our development environment connects the server to a local instance of PostgreSQL. If another DB is preferred it can be configured in the .env file.

To set up 

`CREATE DATABASE scheduler_development;`.

CD into Server folder `cd server`

Install Server dependencies `npm i`

Create .env with `cp .env.example .env` 

## Client Dependencies

* @testing-library/jest-dom
* @testing-library/react
* @testing-library/user-event
* axios
* normalize.css
* react
* react-dom
* react-scripts
* web-vitals
* sass
    
## Server Dependencies
    
* @prisma/client
* body-parser
* dotenv
* express
* morgan
* express-async-errors
* nodemon
* prisma