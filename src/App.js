import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUserDetails, handleSearchString } from "./User/action-userDetails";

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleSearchSubmit = () => {
    this.props.getUserDetails(this.props.userDetails.searchedString);
  };
  hadleSearchChange = e => {
    console.log("searched string", e.target.value);
    this.props.handleSearchString(e.target.value);
  };
  getSerachResultsView = () => {
    ///* Create The Search Result View here --*//
    //*Check  this.props.userDetails.userData  to see the results after submiting*///
    return <div>search Results</div>;
  };
  render() {
    console.log("userData", this.props.userDetails.userData);
    let view =
      this.props.userDetails.userData.length > 0 ? (
        this.getSerachResultsView()
      ) : (
        <div />
      );
    return (
      <div className="App" ref="app">
        <div className="search-View">
          <div>
            <input
              type="text"
              ref="searchText"
              className="text-view"
              onChange={e => this.hadleSearchChange(e)}
            />
          </div>
          <button
            className="submit-button"
            onClick={() => this.handleSearchSubmit()}
          >
            Submit
          </button>
        </div>
        <div />
        <div className="search-results-view">{view}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.UserDetails
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserDetails, handleSearchString }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
