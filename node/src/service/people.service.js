const connection = require('../connection');

const insertPeople = (people) => {
    
    connection.query('INSERT INTO people (firstname, lastname) VALUES ?', [people], (err) => {
        if (err) console.log(err);
    });

}

const getPeople = (result) => {

    connection.query("SELECT * FROM people", (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        result(res);
      });

}

module.exports = {insertPeople, getPeople};