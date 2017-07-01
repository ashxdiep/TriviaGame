//make a variable for what question you're on
var questionNum = 0;

//variable of questions gotten correct
var correct = 0;

//number of seconds to guess
var timer = 10;

var wrong = "<img src = assets/images/wrong.jpg>";

var intervalid;

//make question objects
var q1 = {
  "question": "Which king tried to kill all his wives for not bearing a son?",
  "options" : ["William the Conqueror", "Louis XIV", "Henry VIII", "Peter the Great"],
  "answer" : "Henry VIII",
  "correctimg" : "<img src = assets/images/henry8.jpg>",
};

var q2 = {
  "question": "In Harry Potter, what did Dumbledore leave Harry in his will?",
  "options" : ["Time turner", "Locket", "The Tales of Beedle the Bard", "Golden Snitch"],
  "answer" : "Golden Snitch",
  "correctimg" : "<img src = assets/images/snitch.png>",
};

var q3 = {
  "question": "In the show Friends, what was the color of the couch in Central Perk?",
  "options" : ["Black", "Orange", "Red", "Brown"],
  "answer" : "Orange",
  "correctimg" : "<img src = assets/images/couch.jpg>",
};

var q4 = {
  "question": "Perseus is famous for doing what?",
  "options" : ["Killing the Minotaur", "Killing Medusa", "Stealing an apple from Garden of Hesperides", "Being blinded by Athena"],
  "answer" : "Killing Medusa",
  "correctimg" : "<img src = assets/images/medusa.jpg>",
};

var q5 = {
  "question": "Which lyric is not sung/rapped by Drake?",
  "options" : ["On my worst behavior", "My team good, we don't really need a mascot",
              "I'ma sip it til I feel it, I'ma smoke it til it's done", "Get like me. Never met a mf fresh like me"],
  "answer" : "Get like me. Never met a mf fresh like me",
  "correctimg" : "<img src = assets/images/asap.jpg>",
};

var q6 = {
  "question": "Which is false about zebras?",
  "options" : ["A group of zebras is called a team.", "Zebras primarily eat grass.",
              "A zebra is white with black stripes", "The lead male is called a stallion."],
  "answer" : "A group of zebras is called a team.",
  "correctimg" : "<img src = assets/images/zeal.jpg>",
};

var q7 = {
  "question": "In Lord of the Flies, Ralph uses what to summon the boys?",
  "options" : ["Fire", "Whistling",
              "Bell", "Conch"],
  "answer" : "Conch",
  "correctimg" : "<img src = assets/images/conch.jpg>",
};

var q8 = {
  "question": "Which president is not part of Mt. Rushmore?",
  "options" : ["Theodore Roosevelt", "Andrew Jackson",
              "George Washington", "Abraham Lincoln"],
  "answer" : "Andrew Jackson",
  "correctimg" : "<img src = assets/images/rushmore.jpeg>",
};

var q9= {
  "question": "Michael Phelps broke a 2,000 yr-old Olympics record swimming what?",
  "options" : ["Butterfly", "Breastroke",
              "Freestyle", "Individual Medley"],
  "answer" : "Individual Medley",
  "correctimg" : "<img src = assets/images/medley.png>",
};

var q10 = {
  "question": "How many Hemsworth brothers are there?",
  "options" : ["2", "3",
              "4", "Who are the Hemsworths?"],
  "answer" : "3",
  "correctimg" : "<img src = assets/images/hems.jpeg>",
};


//making an array containing the questions objects
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

$(document).ready(function(){
  var button = $("<button>");
  button.html("click to start");
  $("h1").append(button);

// starting the game, when button is clicked
$(document).on("click","button",function(){

  //display the questions and options
  displayQuestions();
});

//when clicking the answer
$(document).on("click", "span",function(){
  stop();

  console.log("justclicked");
  //check to see if the value of the option matches the answer
  var value = event.target.value;
  console.log("value: " + value);

  //if correct, update countered and show picture
  if (value === questions[questionNum].answer){
    console.log("They got question right " + questionNum);
    correct++;

    $("#" + event.target.id).html(questions[questionNum].correctimg);

  }

  //if not, show bad picture
  else{
    $("#1").html(wrong);
  }

  //update question number
  questionNum++;

  //if done displaying questions, show questions got percentage
  if (questionNum > 10){

  }
  else{
  setTimeout(displayQuestions, 2000);
  }

});


//function to display the question
function displayQuestions(){
  stop();
  //clear the timer
  $(".hello").html("");

  //reset timer back to ten
  timer = 10;

  //set the timer
  run();

  //change the heading to question
  $("h1").html(questions[questionNum].question);

  //for each option
  for (var i = 0; i < 4; i++){
    var id = "#" + i;
    //add answer choices onto screen
    $(id).html(questions[questionNum].options[i]);

    //give each button a value of their options
    $(id).val(questions[questionNum].options[i]);
    console.log("value: " + $(id).val());
  }

}

function decrement(){

  timer--;

  //display number
  $(".hello").html(timer);

  if (timer === 0)
  {

    stop();
    alert ("Too slow!");

    console.log("ran out");

    questionNum++;

    timer = 10;

    displayQuestions();
  }
}

function run(){
  intervalid = setInterval (decrement, 1000);
}

function stop(){
  clearInterval(intervalid);
}

});
