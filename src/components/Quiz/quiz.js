import { Alert } from 'bootstrap';
import React from 'react';
import RadioButton from '../RadioButtons/radiobutton'
import './quiz.css';


export class Quiz extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      QuizData: global.quizDetails
    }
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  updateProgress(){
    if(this.state.percentage !== 100)
      {
      this.setState({
        percentage: this.state.percentage + 20
      });
    }
  }
  handelSubmit = () => {
   let correctCount = 0;
   var answerQuestionOne = document.getElementById("questionOne_1").checked
   var answerQuestionTwo = document.getElementById("questionTwo_3").checked
   var answerQuestionThree = document.getElementById("questionThree_2").checked
   var answerQuestionFour = document.getElementById("questionFour_4").checked
   var answerQuestionFive = document.getElementById("questionFive_3").checked

   if(answerQuestionOne)
   {
    correctCount++
     document.getElementById("questionOne_1").className += " isCorrect"
   }
   else
   {
    document.getElementById("questionOne_1").className += " isCorrect"
    document.getElementById("questionOne_2").className += " isIncorrect"
    document.getElementById("questionOne_3").className += " isIncorrect"
    document.getElementById("questionOne_4").className += " isIncorrect"
   }
   if(answerQuestionTwo)
   {
    correctCount++
    document.getElementById("questionTwo_3").className += " isCorrect"
   }
   else{
    document.getElementById("questionTwo_3").className += " isCorrect"
    document.getElementById("questionTwo_2").className += " isIncorrect"
    document.getElementById("questionTwo_1").className += " isIncorrect"
    document.getElementById("questionTwo_4").className += " isIncorrect"
   }
   if(answerQuestionThree)
   {
    correctCount++
    document.getElementById("questionThree_2").className += " isCorrect"
   }
   else{
    document.getElementById("questionThree_2").className += " isCorrect"
    document.getElementById("questionThree_1").className += " isIncorrect"
   }
   if(answerQuestionFour)
   {
    correctCount++
    document.getElementById("questionFour_4").className += " isCorrect"
   }
   else{
    document.getElementById("questionFour_4").className += " isCorrect"
    document.getElementById("questionFour_3").className += " isIncorrect"
    document.getElementById("questionFour_1").className += " isIncorrect"
    document.getElementById("questionFour_2").className += " isIncorrect"
   }
   if(answerQuestionFive)
   {
    correctCount++
    document.getElementById("questionFive_3").className += " isCorrect"
   }
   else{
    document.getElementById("questionFive_3").className += " isCorrect"
    document.getElementById("questionFive_1").className += " isIncorrect"
    document.getElementById("questionFive_2").className += " isIncorrect"
    document.getElementById("questionFive_4").className += " isIncorrect"
   }
   alert('You managed to get '+correctCount+' out of 5 correct. \n\nPlease Return to Canvas')
  }
  render () {  
      return (
        <div>
            <form onSubmit={this.handelSubmit}>
                <div className="formTile">
                    <h1>Recap Quiz</h1>
                    <ul>
                            {Object.keys(this.state.QuizData).map((i) =>
                                <li key={'question_'+i}>
                                    <p>{this.state.QuizData[i].question}</p>
                                    <RadioButton options={this.state.QuizData[i].answers}/>
                                </li>                            
                            )}
                    </ul>
                </div>
            </form>
            <button type="submit" className="submitButton" onClick={this.handelSubmit}>Submit</button>
        </div>
      );
    } 
}