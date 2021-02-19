const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer=("");
let questions=[ 'Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? ' ]
let correctAnswers= ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];
let numberOfCorrectAnswers=0
let grade=0
let index=questions.length
let lowerCaseCorrectAnswers=[]

 for (i=0;i<correctAnswers.length;i++){
 lowerCaseCorrectAnswers[i]=correctAnswers[i].toLowerCase()
}

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


function gradeQuiz(candidateAnswer,correctAnswer,lowerCaseCorrectAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
  if (candidateAnswer===lowerCaseCorrectAnswers){
  numberOfCorrectAnswers +=1;
  grade=(numberOfCorrectAnswers/5)*100;
  console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer}`);
  
    return grade

}grade=(numberOfCorrectAnswers/5)*100;
console.log(`Your Answer wrong: ${candidateAnswer} \nCorrect Answer: ${correctAnswer}`);
return grade
  
}



function runProgram() {
  canidateName=askForName("What is your name");
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${canidateName}`);
 


for (let i=0;i<index;i++){
candidateAnswer=askQuestion(questions[i]);
candidateAnswers.push(candidateAnswer);
grade=gradeQuiz(candidateAnswers[i],correctAnswers[i],lowerCaseCorrectAnswers[i])

}
if (grade<80){
  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of 5 responses correct) \n>>> Status: Failed <<<`)
  }else{console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} out of 5 responses correct)<<< \n>>> Status: Passed <<<`)}


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