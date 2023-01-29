const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ' ';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ' ';
let questions = [
  "1.) Who was the first American woman in space? ", 
  "\n2.) True or false: 5 kilometer = 5000 meters. ", 
  "\n3.) (5 + 3) / 2 * 10 = ? ", 
  "\n4.) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "\n5.) What is the minimum crew scize for the ISS? "];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"];
let candidateAnswers = [
  " ",
  " ",
  " ",
  " ",
  " "
];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate Name: ")

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i = questions.length;) {
  candidateAnswers[0] = input.question(questions[0] + '\n Enter your answer: ');
  candidateAnswers[1] = input.question(questions[1] + '\n Enter your answer: ');
  candidateAnswers[2] = input.question(questions[2] + '\n Enter your answer: ');
  candidateAnswers[3] = input.question(questions[3] + '\n Enter your answer: ');
  candidateAnswers[4] = input.question(questions[4] + '\n Enter your answer: ');
  if (i = 5){
    break;
  } 
}

}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

if (candidateAnswers != " ") {
  console.clear();
  console.log(`Candidate Name: ${candidateName}`)
  console.log (`\n${questions[0]}  \nYour Answer: ${candidateAnswers[0]} \nCorrect Answer: ${correctAnswers[0]}`);
  console.log (`\n${questions[1]} \nYour Answer: ${candidateAnswers[1]} \nCorrect Answer: ${correctAnswers[1]}`);
  console.log (`\n${questions[2]} \nYour Answer: ${candidateAnswers[2]} \nCorrect Answer: ${correctAnswers[2]}`);
  console.log (`\n${questions[3]} \nYour Answer: ${candidateAnswers[3]} \nCorrect Answer: ${correctAnswers[3]}`);
  console.log (`\n${questions[4]} \nYour Answer: ${candidateAnswers[4]} \nCorrect Answer: ${correctAnswers[4]}`);
}
 
if (candidateAnswers[0].toUpperCase() === correctAnswers[0].toUpperCase()) {
  score1 = 1;
} else {
  score1 = 0;
}
if (candidateAnswers[1].toUpperCase() === correctAnswers[1].toUpperCase()) {
  score2 = 1;
} else {
  score2 = 0;
}
if (candidateAnswers[2].toUpperCase() === correctAnswers[2].toUpperCase()) {
  score3 = 1;
} else {
  score3 = 0;
}
if (candidateAnswers[3].toUpperCase() === correctAnswers[3].toUpperCase()) {
  score4 = 1;
} else {
  score4 = 0;
}
if (candidateAnswers[4].toUpperCase() === correctAnswers[4].toUpperCase()) {
  score5 = 1;
} else {
  score5 = 0;
}
  
let grade = (score1 + score2 + score3 + score4 + score5);
let gradePercent = ((grade)/5*100);
  
if (gradePercent >= 80) {
  console.log(`\n> > > Overall Grade: ${gradePercent}% (${grade} out of 5 questions answered correctly) < < <\n`);
  console.log("> > > Status: PASSED! < < <\n");
} else if (gradePercent < 80) {
  console.log(`\n> > > Overall Grade: ${gradePercent}% (${grade} out of 5 questions answered correctly) < < <\n`);
  console.log("> > > Status: FAILED! < < <\n")
}

  
return grade;


}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log (`\n Hello ${candidateName}, good luck on the quiz! \n`);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};