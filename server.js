var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var genNum = 1;
var num = 10;
var person = [
    { fullName: 'Mary-Anne Smith',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKikw9YXA_GT-In3b47TA-2bNWBTgfwnuJPUMoiVIPs17cD4nr',
    answer: [ '4', '5', '1', '1', '1', '1', '4', '1', '4', '1' ] },
    { fullName: 'Robert Taylor',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq07Ly7RP7F_HHglagp357KJWMgADNkLkro1qn8kttM7fCTofY',
  answer: [ '4', '5', '1', '1', '1', '1', '4', '1', '4', '1' ] }
];
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

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
});
app.get("/api/question", function(req, res) {
    return res.json(question);
});

app.post("/api/answer", function(req,res){

    var answer = req.body;
    person.push(answer);

    // Something wrong with this function)
    var diff = matchMaking(answer);
    res.json(diff);
})

app.listen(PORT, function() {
    console.log("App listening on PORT ", PORT);
  });

function matchMaking(data) {
    //var matchScore = [];
    var diff = 0;
    console.log("DATA", data);
    console.log("PERSON", person);
    for (i = 0; i < person.length; i++) {
            console.log(parseInt(data.answer[i]));
            console.log(parseInt(person[0].answer[i]));
            diff += Math.abs(parseInt(data.answer[i]) - parseInt(person[0].answer[i])); 
            //matchScore.push(diff);
    }
    return diff;
}  
  
