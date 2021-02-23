import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {selectPage} from '../../actions/index.js';
import './SideBar.css';

class SideBar extends Component {
    static displayName = SideBar.name;
    constructor(props) {
        super(props);
        this.state = {
            tiles: {}
        };    
    }

    componentDidMount() {
        this.populateTileData();
    }

    render() {
        console.log(this.props.cliplist +" 1 here")
        if(this.props.cliplist)
        {
            return (
                <div>
                    <div className="sideBar-body">
                        <h3>Lessons</h3>
                            <ul>
                                <tbody>
                                    {Object.keys(this.props.cliplist).map((i) =>
                                        <li onClick={() => this.props.userSelectPage(this.props.cliplist[i])}>
                                            <div key={'tile_'+i} class="tile">
                                                <img src={require('../images/' + this.props.cliplist[i].BothThumbImage + '.PNG')} width="90%" />
                                                    <a href="#" ><h5>{this.props.cliplist[i].SideBarTitle}</h5></a>
                                                    <p>{this.props.cliplist[i].SideBarDescription}</p>
                                            </div>
                                        </li>
                                    )}
                                </tbody>
                            </ul>
                     </div>
                </div>
            );
        }
        else
        {           
        return (
            <div>
                <div className="sideBar-body">
                    <h3>Lessons</h3>
                    <ul>
                      <h1>Loading Failed</h1>
                    </ul>
                </div>
            </div>
        );
        }
    }

    async populateTileData() {
        this.setState({ tiles: this.props.cliplist, loading: false, userSelectPage: this.props.userSelectPage });
    }
}

function mapStateToProps(state) {
    return {
        cliplist: state.cliplist
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
          userSelectPage: selectPage}, dispatch
        );
    };

SideBar = connect(mapStateToProps, matchDispatchToProps)(SideBar)

export default SideBar




