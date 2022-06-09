const db = require('./db_connect')

const getAllStudents = () => {
  return db.query('SELECT * FROM users;')
    .then((response) => {
      return response.rows;
    })
}

module.exports = {getAllStudents};