import React, { Component } from 'react';
import image1 from '../images/intro.PNG';

export default class Tiles extends Component {
  static displayName = Tiles.name;

  constructor (props) {
    super(props);
    this.state = {
      
    };
  }
  render () {
    return (
      <li>
        <div class="tile">
        <a href="#">
          <img src={image1} width="90%"/>
          <p>Installation</p>
        </a>        
      </div>
    </li>
    );
  }
}

//https://www.digitalocean.com/community/conceptual_articles/understanding-how-to-render-arrays-in-react#:~:text=To%20render%20multiple%20JSX%20elements%20in%20React,%20you,single%20element%20for%20each%20item%20in%20the%20array:


/*
function DropdownMenu(props) {

  let dropdownClassName;
  if(isMobile)
  {
    dropdownClassName = "MobileDropdown";
  }
  else{
    dropdownClassName = "Dropdown";

  }  
  return (
  <select id={props.id} 
  className={dropdownClassName} >
    <option value="">{props.placeholder}</option>
      {props.options.map((value, i) => (
        <option key={i} value={value.value}>{value.label}</option>
      ))}
  </select>
  );
}
export default DropdownMenu;

DropdownMenu.defaultProps = {
  
    options:[
      { value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
      { value: 'criminoloy', label: 'BA (Hons) Crimonology'},
      { value: 'digitalArts', label: 'FDA Digital Arts'}
    ]
};*/