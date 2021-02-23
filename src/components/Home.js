import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        console.log(this.props.page)
         return (
            <tbody>
                 <div>
                    <div>
                        <div>
                            <a href={require('./video/' + this.props.page.PageVideo + '.mkv')}>
                                <video controls class="img-fluid" poster={require('./images/' + this.props.page.BothThumbImage + '.PNG')}>
                                 <source src={require('./video/' + this.props.page.PageVideo + '.mkv')} type="video/mp4"></source>
                                </video>
                             </a>
                        </div>
                    </div>
                <div className="title">
                    <h1>{this.props.page.PageTitle}</h1>
                </div>
                <div>
                    <p>{this.props.page.PageText}</p>
                 </div>
            </div>
        </tbody>
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