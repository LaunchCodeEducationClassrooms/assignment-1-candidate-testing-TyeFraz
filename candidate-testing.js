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
  let candidateName=input.question(prompt);
  return candidateName;
  
};

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0;i<index;i++){
candidateAnswer=input.question(questions[i]);
candidateAnswer.toLowerCase()
candidateAnswers.push(candidateAnswer);
   } return candidateAnswer
};


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  
  for(let i=0; i<index;i++){
  if (candidateAnswers[i]===lowerCaseCorrectAnswers[i]){
  numberOfCorrectAnswers +=1;
    console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
  }else{
console.log(`Your Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}`)};
  }
  grade=(numberOfCorrectAnswers/5)*100;
  if (grade<80){
  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of 5 responses correct) \n>>> Status: Failed <<<`)
  }else{console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} out of 5 responses correct)<<< \n>>> Status: Passed <<<`)}

return grade
};




function runProgram(){
  candidateName=askForName("What is your name");
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}`);
 
  askQuestion(questions);
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