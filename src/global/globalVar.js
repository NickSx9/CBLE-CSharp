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
  answers: [
    { label: "yes", id: "questionOne_1", value: "yes", name:"questionOne"},
    { label: "no", id: "questionOne_2", value: "no", name:"questionOne"},
    { label: "maybe", id: "questionOne_3", value: "maybe", name:"questionOne"},
    { label: "sometimes", id: "questionOne_4", value: "sometimes", name:"questionOne"}
  ]
},
{
  questionNumber: 2,
  question: "2. how long is too long?",
  answers: [
    { label: "", id: "questionTwo_1", value: "", name:"questionTwo"},
    { label: "", id: "questionTwo_2", value: "", name:"questionTwo"},
    { label: "", id: "questionTwo_3", value: "", name:"questionTwo"},
    { label: "", id: "questionTwo_4", value: "", name:"questionTwo"}
  ]
},
{
  questionNumber: 3,
  question: "3. when you eat beans, does it make you fart",
  answers: [
    { label: "", id: "questionThree_1", value: "", name:"questionThree"},
    { label: "", id: "questionThree_2", value: "", name:"questionThree"},
    { label: "", id: "questionThree_3", value: "", name:"questionThree"},
    { label: "", id: "questionThree_4", value: "", name:"questionThree"}
  ]
},
{
  questionNumber: 4,
  question: "4. what time is it?",
  answers: [
    { label: "", id: "questionFour_1", value: "", name:"questionFour"},
    { label: "", id: "questionFour_2", value: "", name:"questionFour"},
    { label: "", id: "questionFour_3", value: "", name:"questionFour"},
    { label: "", id: "questionFour_4", value: "", name:"questionFour"}
  ]
},
{
  questionNumber: 5,
  question: "5. what is the right colour?",
  answers: [
    { label: "", id: "questionFive_1", value: "", name:"questionFive"},
    { label: "", id: "questionFive_2", value: "", name:"questionFive"},
    { label: "", id: "questionFive_3", value: "", name:"questionFive"},
    { label: "", id: "questionFive_4", value: "", name:"questionFive"}
  ]
}]