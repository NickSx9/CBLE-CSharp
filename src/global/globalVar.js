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
  question: "1. Which command is used to display text to the screen, while leaving the cursor on the same line?",
  answers: [
    { label: "Console.Write()", id: "questionOne_1", value: "yes", name:"questionOne"},
    { label: "Console.WriteLine()", id: "questionOne_2", value: "no", name:"questionOne"},
    { label: "console.write()", id: "questionOne_3", value: "maybe", name:"questionOne"},
    { label: "Console.ReadLine()", id: "questionOne_4", value: "sometimes", name:"questionOne"}
  ]
},
{
  questionNumber: 2,
  question: "2. Which variable type should be used to contain words?",
  answers: [
    { label: "char", id: "questionTwo_1", value: "", name:"questionTwo"},
    { label: "int", id: "questionTwo_2", value: "", name:"questionTwo"},
    { label: "string", id: "questionTwo_3", value: "", name:"questionTwo"},
    { label: "double", id: "questionTwo_4", value: "", name:"questionTwo"}
  ]
},
{
  questionNumber: 3,
  question: "3. when you eat beans, does it make you fart",
  answers: [
    { label: "", id: "questionThree_1", value: "", name:"questionThree"},
    { label: "correct", id: "questionThree_2", value: "", name:"questionThree"},
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
    { label: "correct", id: "questionFour_4", value: "", name:"questionFour"}
  ]
},
{
  questionNumber: 5,
  question: "5. what is the right colour?",
  answers: [
    { label: "", id: "questionFive_1", value: "", name:"questionFive"},
    { label: "", id: "questionFive_2", value: "", name:"questionFive"},
    { label: "correct", id: "questionFive_3", value: "", name:"questionFive"},
    { label: "", id: "questionFive_4", value: "", name:"questionFive"}
  ]
}]