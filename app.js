(function (){

    function buildQuiz(){

        //the variable the store in HTML
        const output = [];


        myQuestions.forEach(
          (currentQuestion, questionNumber) => {

            //the variable to store the list of possible answers
            const answers = [];
      
    
            for(letter in currentQuestion.answers){
      
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
      
            output.push(
              `
              <div class="question">
               ${currentQuestion.question} 
               </div>
              <div class="answers"> 
              ${answers.join('')} 
              </div>
              `
            );
          }
        );
      
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }
         
})












//declarar los diferentes elementos con su id correspondiente
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

     
    
                

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion,questionNumber) =>{

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.CorrectAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color='lightgreen';
        }else{
            answerContainers[questionNumber].style.color='red';
        }
        
    })
    resultsContainer.innerHTML =`${numCorrect} out of ${myQuestions.length}`;
}


//display quiz right away
buildQuiz();


//on submit,show results
submitButton.addEventListener('click', showResults)















//start questions quiz

const myQuestions = [
    {
        question: "where is the arepa from ?",
        answers:{
            a:"Colombia",
            b:"Venezuela",
            c:"Spain"
        },
        CorrectAnswer: "b"
    },

    {
        question:"the most difficult programming language in the world ?",
        answers:{
            a:"C++",
            b:"Javascript",
            c:"PHP"
        },
        CorrectAnswer:"a"
    },

    {
        question:"The biggest country in the world ?",
        answers:{
            a:"Russia",
            b:"Colombia",
            c:"EEUU"
        },
        CorrectAnswer:"a"
    },

    {
        question:"What is the hardest color to see ?",
        answers:{
            a:"white",
            b:"red",
            c:"black"
        },
        CorrectAnswer:"c"

    }
    
]