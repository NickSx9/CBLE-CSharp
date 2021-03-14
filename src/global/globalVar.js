global.pageNumber = 0;
global.QuizState = false;


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
  question: "3. A void method can return a value",
  answers: [
    { label: "true", id: "questionThree_1", value: "", name:"questionThree"},
    { label: "false", id: "questionThree_2", value: "", name:"questionThree"}
  ]
},
{
  questionNumber: 4,
  question: "4. How should a public class, called Player be called?",
  answers: [
    { label: "player = new Player();", id: "questionFour_1", value: "", name:"questionFour"},
    { label: "Player player = New Player()", id: "questionFour_2", value: "", name:"questionFour"},
    { label: "String player = new Player();", id: "questionFour_3", value: "", name:"questionFour"},
    { label: "Player player = new Player();", id: "questionFour_4", value: "", name:"questionFour"}
  ]
},
{
  questionNumber: 5,
  question: "5. What line of code would NOT cause an error",
  answers: [
    { label: "string name = Console.ReadKey();", id: "questionFive_1", value: "", name:"questionFive"},
    { label: "string name = Console.ReadKey(); ", id: "questionFive_2", value: "", name:"questionFive"},
    { label: "string name = Console.ReadLine();", id: "questionFive_3", value: "", name:"questionFive"},
    { label: "string name = Console.readLine();", id: "questionFive_4", value: "", name:"questionFive"}
  ]
}]