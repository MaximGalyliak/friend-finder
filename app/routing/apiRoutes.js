const Express = require('express');
const Path = require('path');
const BodyParser = require('body-parser');
const Fs = require('fs');
const apiR = Express();

apiR.use(BodyParser.urlencoded({ extended: true }));
apiR.use(BodyParser.json());

var friends = JSON.parse(Fs.readFileSync(Path.join(__dirname, '../data/friends.json'), 'utf8'));

apiR.get('/friends', (req, res) => {

    res.json(friends);

});

apiR.post('/friends', (req, res) => {

    let userScore = req.body.scores;
    let differences = [];

    friends.map(friend => {

        var difference = 0;

        friend.scores.map((score, index) => {

            difference += Math.abs(score - userScore[index]);

        });

        differences.push(difference);

    });

    let friendIndex = 0;

    differences.map((element, index) => {

        if (differences[friendIndex] > element) {

            friendIndex = index;

        };

    });

    friends.push(req.body);

    Fs.writeFileSync(Path.join(__dirname, '../data/friends.json'), JSON.stringify(friends, null, 2));

    res.json(friends[friendIndex]);

});

module.exports = apiR;