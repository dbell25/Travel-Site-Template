/**
 * @fileoverview Displays the public banner and navbar.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../_common/assets/css/banner.css';

export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.logo = require('../_common/assets/img/logo.png');
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <div className="banner">
                    <img src={this.logo} alt="" className="logo" />
                    <div className="brand">
                        <h2 className="brand-heading">Travel Template</h2>
                        <p className="brand-text">Subheading Goes Here</p>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/blog" className="nav-item nav-link">Blog</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/resources" className="nav-item nav-link">Resources</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}