import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from '../components/Header/Header.js';
import SideBar  from '../components/SideBar/SideBar.js';
import { ProgressBar } from '../components/ProgressBar/ProgressBar.js';
import '../'

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div class="mainWeb-body">
        <Container className="block">
           <Header />
           <div class="row">
              <div className="col-lg-9 col-md-9 col-sm-12 main-body">
                {this.props.children}
                <ProgressBar/>
              </div>
            <div className="col-lg-3  col-md-3 col-sm-12 navigationSideBar">
                <SideBar/>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
