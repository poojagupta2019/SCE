import React from 'react';
import './App.css';
import Main from './Main';
import Header from "./Header";
import $ from "jquery";

class App extends React.Component {

  componentDidMount() {
    function updateActiveTab(tab) {
      $("ul.nav-tab li a").removeClass("selected");
      $(tab).addClass("selected");
    }

    //Tabs implementation
    $("ul.nav-tab li a").click(function () {
      updateActiveTab(this);
    });

    //stay on same tab on page reload
    var hash = window.location.hash;
    if (hash) {
      $("ul.nav-tab li a[href='" + hash + "']").click();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
