const service = require('../service/people.service');

const insertPeople = () => {

    var people = [['Assis', 'Bernardo']];

    service.insertPeople(people);
}

const getPeople = (req, res) => {

    insertPeople();

    service.getPeople(data => {

        const list = data.map(entry => {
            return `<li>${entry.firstname} ${entry.lastname}</li>`;
        });

        res.send(`<h1>Full Cycle Rocks!</h1><h2>Registered people.</h2><ul>${list.join('')}</ul>`);
    });

}

module.exports = {getPeople};