import React from "react";
import { Link } from "react-router-dom";

const renderTabs = function () {
    let tabs = [];
    tabs.push(
        <li key="administration">
            <Link to="/administration">Administration</Link>
        </li>
    ); //default apps list
    tabs.push(
        <li key="job-management">
            <Link to="/job-management">Job Management</Link>
        </li>
    );
    return tabs;
};


class Header extends React.Component {
    render() {
        const userProfileStyle = {
            backgroundColor: "#2b94d1",
            width: "50px",
            height: "50px",
            position: "relative",
            textAlign: "center",
            color: "white",
            borderRadius: "37px",
            margin: "13px 0 0 5px"
        };

        const helpLogoStyle = {
            marginTop: "25px",
            color: "#2b94d1",
            fontSize: "25px",
            marginBottom: "0px"
        };

        return (
            <header>
                <section className="container-fluid navigation_bar">
                    <div className="row">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header" style={ { marginTop: "20px" } }>
                                    <span style={ {
                                        fontWeight: "bolder",
                                        fontSize: "30px",
                                        color: "#2b94d1"
                                    } }>SCE </span>
                                    <span style={ {
                                        fontStyle: 'italic',
                                        color: "#2b94d1"
                                    } }>Statistical Computing Environment</span>
                                </div>
                                <div
                                    className="collapse navbar-collapse"
                                    id="bs-example-navbar-collapse-1"
                                >
                                    <ul className="nav navbar-nav nav-tab">
                                        { renderTabs() }
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li>
                                            <div style={ helpLogoStyle }>
                                                <i className="fa fa-bell"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={ helpLogoStyle }>
                                                <i className="fa fa-question"></i>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown">
                                            <div style={ userProfileStyle }>
                                                <p style={ { fontSize: "2.5em" } }>P</p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
        );
    }
}


export default Header;
