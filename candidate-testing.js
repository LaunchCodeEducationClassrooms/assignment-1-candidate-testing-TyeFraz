const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space?";
let correctAnswer="Sally Ride";
let candidateAnswer=("");
let questions=["Who was the first American woman in space?","True or false: 5000 meters = 5 kilometers.","(5+3)/2*10=?", "Given The array [8,'Orbit','Trajectory',45]. what entry is at index 2?;","What is the minimum crew size for ISS?"]
let correctAnswers= ["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers=[];
let numberOfCorrectAnswers=0
let grade=0
let index=questions.length

function askForName(prompt) {
  // TODO 1.1b: Ask for candidate's name //
  let userInput=input.question(prompt);
  return userInput;
  
};

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer=input.question(question);
return candidateAnswer.toLowerCase()
};


function gradeQuiz(candidateAnswer,correctAnswer) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  if (candidateAnswer===correctAnswer.toLowerCase()){
  numberOfCorrectAnswers +=1
  
    return ((grade=(numberOfCorrectAnswers/index)*100),(console.log(`Your Answer: ${candidateAnswer}\nThe Correct Answer: ${correctAnswer}.`)));

}
return ((grade=(numberOfCorrectAnswers/index)*100),
 (console.log(`Your Answer: ${candidateAnswer} \nThe Correct Answer: ${correctAnswer}.`)),
grade);
  return grades



}




function runProgram() {
  canidateName=askForName("What is your name");
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Greetings ${canidateName}!`);
  


for (let i=0;i<index;i++){
candidateAnswer=askQuestion(questions[i]);
candidateAnswers.push(candidateAnswer);
gradeQuiz(candidateAnswers[i],correctAnswers[i])

}
if (grade<80){
  console.log(`Your grade is ${grade}%.(${numberOfCorrectAnswers} out of 5 correct answers) \nYou did not pass!`)
  }else{console.log(`Your grade is ${grade}%. ${numberOfCorrectAnswers} out of 5 correct answers) \You Passed!`)}



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