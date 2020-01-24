import React from "react";
// import PropTypes from 'prop-types';
import FileExplorer from "./FileExplorer";
import "../css/appDetails.css";

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className="apps-container col-md-12">
        <div className="col-md-3 app-types-container">
          <FileExplorer />
        </div>
        <div className="col-md-9">
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {

}