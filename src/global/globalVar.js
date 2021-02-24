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
    { label: "yes", id: "clickyes", value: "yes"},
    { label: "no", id: "clickno", value: "no"},
    { label: "maybe", id: "clickmaybe", value: "maybe"},
    { label: "sometimes", id: "clicksometimes", value: "sometimes"}
  ]
},
{
  questionNumber: 2,
  question: "2. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 3,
  question: "3. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 4,
  question: "4. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 5,
  question: "5. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 6,
  question: "6. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 7,
  question: "7. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 8,
  question: "8. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 9,
  question: "9. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 10,
  question: "10. ",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
}]