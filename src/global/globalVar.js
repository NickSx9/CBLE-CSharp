global.pageNumber = 0;
global.QuizState = false;

function  reloadComponent(pagenumber){
    global.pageNumber = pagenumber;
    window.location.reload();
  }

  //this is the function responsible to update the state
function globalUpdateState(text){
    this.setState({text})
}

global.quizDetails = [{
  questionNumber: 1,
  question: "1. What is the maximum value an int variable can support?",
  answers: {
      optionOne: "ad",
      optionTwo: "ds",
      optionThree: "fd",
      optionFour: "s"
  }
},
{
  questionNumber: 2,
  question: "2. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 3,
  question: "3. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 4,
  question: "4. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 5,
  question: "5. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 6,
  question: "6. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 7,
  question: "7. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 8,
  question: "8. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 9,
  question: "9. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
},
{
  questionNumber: 10,
  question: "10. ",
  answers: {
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: ""
  }
}]