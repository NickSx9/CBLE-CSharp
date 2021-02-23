import React from 'react';
import './ProgressBar.css';


export class ProgressBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      percentage: 0
    }
    this.updateProgress = this.updateProgress.bind(this);
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
    if(this.state.percentage === 100)
    {
      return (
        <div>
          <h2 className="Progress-title">Tutorial Completed</h2>
             <Progress percentage={this.state.percentage} />
             <p><br/>Congratulations! you have completed the Basic C# tutorial.</p>
             <button class="progressButton">Click Here To Proceed to the Quiz</button>
        </div>
      );
    }
    else{
    return (
           <div>
             <h2 className="Progress-title">Progress</h2>
                <Progress percentage={this.state.percentage} />
                  <button class="progressButton" onClick={this.updateProgress}>Completed Lesson</button>
           </div>
    );
  }
}
}
const Progress = (props) => {
  return (
    <div className="progressBar">
      <Filler percentage={props.percentage} />
    </div>
  )
}
const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

// Progress Bar example
//https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
