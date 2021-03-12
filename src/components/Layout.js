import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from '../components/Header/Header.js';
import SideBar  from '../components/SideBar/SideBar.js';
import { ProgressBar } from '../components/ProgressBar/ProgressBar.js';
import Home  from '../components/Home.js'


export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="mainWeb-body">
        <Container className="block">
           <Header />
           <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 main-body">
                  <Home/>
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
