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
  handelSubmit(){
   console.log("Button Clicked")
  }
  render () {  
      return (
        <div>
            <form onSubmit={this.handelSubmit}>
                <div class="formTile">
                    <h1>Recap Quiz</h1>
                    <ul>
                        <tbody>
                            {Object.keys(this.state.QuizData).map((i) =>
                                <li>
                                    <p>{this.state.QuizData[i].question}</p>
                                    <RadioButton options={this.state.QuizData[i].answers}/>
                                </li>                            
                            )}
                        </tbody>
                    </ul>
                </div>
            </form>
            <button type="submit" class="submitbutton">Submit</button>
        </div>
      );
    } 
}


