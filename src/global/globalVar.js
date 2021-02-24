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
  question: "2. how long is too long?",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 3,
  question: "3. when you eat beans, does it make you fart",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 4,
  question: "4. what time is it?",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
},
{
  questionNumber: 5,
  question: "5. what is the right colour?",
  answers: [
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""},
    { label: "", id: "", value: ""}
  ]
}]