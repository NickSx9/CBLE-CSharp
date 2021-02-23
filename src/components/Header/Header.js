import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  static displayName = Header.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
            <div class="title-header">
              <h1>Basic C# Tutorial</h1>
            </div>
      </header>
    );
  }
}
