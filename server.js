var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var genNum = 1;
var num = 10;
var person = [
    {
        fullName: 'Mary-Anne Smith',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKikw9YXA_GT-In3b47TA-2bNWBTgfwnuJPUMoiVIPs17cD4nr',
        answer: ['4', '5', '6', '6', '6', '6', '4', '6', '4', '2']
    },
    {
        fullName: 'Robert Taylor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUZe87p8UmQ3uURn0SHYSp0lAEQm8sxBTDlUYSlwLKX1MnGDrd',
        answer: ['6', '2', '1', '1', '2', '2', '4', '2', '4', '3']
    }
];
var diff = 0;
var diffArray = [];
var smallestNum = 0;
var closestMatch = 0;

var question = [
    {
        num: 1,
        question: "Your mind is always buzzing with unexplored ideas and plans."
    },
    {
        num: 2,
        question: "Generally speaking, you rely more on your experience than your imagination."
    },
    {
        num: 3,
        question: "You find it easy to stay relaxed and focused even when there is some pressure."
    },
    {
        num: 4,
        question: "You rarely do something just out of sheer curiosity."
    },
    {
        num: 5,
        question: "People can rarely upset you."
    },
    {
        num: 6,
        question: "It is often difficult for you to relate to other people’s feelings."
    },
    {
        num: 7,
        question: "In a discussion, truth should be more important than people’s sensitivities."
    },
    {
        num: 8,
        question: "You rarely get carried away by fantasies and ideas."
    },
    {
        num: 9,
        question: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not."
    },
    {
        num: 10,
        question: "You feel more energetic after spending time with a group of people."
    }
]

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
});


app.get("/api/question", function (req, res) {
    return res.json(question);
});

app.post("/api/answer", function (req, res) {

    var answer = req.body;
    var matchFun = matchMaking(answer);
    console.log("matchFun = " + matchFun.fullName)
    res.json(matchFun);

})

app.listen(PORT, function () {
    console.log("App listening on PORT ", PORT);
});

function matchMaking(data) {
    //var matchScore = [];

    console.log("DATA", data);
    console.log("PERSON", person);

    for (e = 0; e < person.length; e++) {

        diff = 0;

        for (i = 0; i < person[e].answer.length; i++) {
            diff += Math.abs(parseInt(data.answer[i]) - parseInt(person[e].answer[i]));
            console.log("diff: " + diff);
            if(i == 9) {
                diffArray.push(diff);
                console.log("Push to diffArray: " + diffArray);
            }
        }

        smallestNum = Math.min.apply(null, diffArray);
        closestMatch = diffArray.indexOf(smallestNum);
        console.log("Closest Match is " + person[closestMatch].fullName);

    }

    person.push(data);
    return person[closestMatch];
}

