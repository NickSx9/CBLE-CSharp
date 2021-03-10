import React,{useState} from 'react'
import PropTypes from 'prop-types'
import '../Quiz/quiz.css'


const RadioButton = ({options, ...props}) => {
    const [input, setInput] = useState('');
    const handleChange = event => {
      setInput(event.target.value);
    }
    //Iterate through options array and create an input + label for each
    var items = options.map((item, i) =>
        <div key={i} className="radio-group">
            <input name={item.name} className="option-input radio" type="radio" id={item.id} data-testid={item.id} value={item.value} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.label}</label>
        </div>
    );

    //Return div with heading, subtitle and then the items variable which is created in the loop above

    return(
        <div>
            {items}
        </div>
    );
}

RadioButton.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    heading: PropTypes.string,
    subtitle: PropTypes.string,
    oc: PropTypes.func
}

RadioButton.defaultProps = {
    heading: null,
    subtitle: null
}

export default RadioButton;
