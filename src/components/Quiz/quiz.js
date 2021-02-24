import React from 'react';
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
  render () {  
      return (
        <div>
            <form>
                <div class="formTile">
                    <h1>Recap Quiz</h1>
                    <ul>
                        <tbody>
                            {Object.keys(this.state.QuizData).map((i) =>
                                <li>
                                    <p>{this.state.QuizData[i].question}</p>
                                    {Object.keys(this.state.QuizData[i].answers).map((x) =>
                                        <div key={i+x}>
                                            <input type="radio" id={"id_"+i+"_"+x} value={"answer_"+i+"_"+x}/>
                                                <label>{this.state.QuizData[i].answers[x]}</label>                                            
                                        </div>
                                    )}
                                </li>                            
                            )}
                        </tbody>

                    </ul>
                </div>
            </form>
        </div>
      );
    }
   
}


