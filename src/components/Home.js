import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css'


class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            page: {}
        };
    }

    componentDidMount() {
        this.populatePageData();
        console.log(this.state.pageNumber);
    }

    render() {
        if(this.props.page.download)
        {
         return (
                     <div>
                        <div>
                            <div>
                                <a href={require('./video/' + this.props.page.PageVideo + '.mp4')}>
                                    <video controls className="img-fluid" poster={require('./images/' + this.props.page.BothThumbImage + '.PNG')}>
                                     <source src={require('./video/' + this.props.page.PageVideo + '.mp4')} type="video/mp4"></source>
                                    </video>
                                 </a>
                            </div>
                        </div>
                    <div className="title">
                        <h1>{this.props.page.PageTitle}</h1>
                    </div>
                    <div className="mainParagraph">
                        <p>{this.props.page.PageText}</p>
                     </div>
                     <a href="https://visualstudio.microsoft.com/downloads/">Download Visual Studio</a>
                </div>
          );
        }
         return (
                 <div>
                    <div>
                        <div>
                            <a href={require('./video/' + this.props.page.PageVideo + '.mp4')}>
                                <video controls className="img-fluid" poster={require('./images/' + this.props.page.BothThumbImage + '.PNG')}>
                                 <source src={require('./video/' + this.props.page.PageVideo + '.mp4')} type="video/mp4"></source>
                                </video>
                             </a>
                        </div>
                    </div>
                <div className="title">
                    <h1>{this.props.page.PageTitle}</h1>
                </div>
                <div className="mainParagraph">
                    <p>{this.props.page.PageText}</p>
                 </div>
            </div>   
    );
  }
  async populatePageData() {
      console.log(this.props.page);
      this.setState({ page: this.props.page });
  }
}

function mapStateToProps(state) {
    return {
        page: state.activePage
    };
}

export default connect(mapStateToProps)(Home)
/**/