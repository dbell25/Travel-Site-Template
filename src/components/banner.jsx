/**
 * @fileoverview Displays the public banner.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import '../_common/assets/css/navigation.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="header">
                <div className="banner">
                    <h2 className="title">
                        Travel Site Template  <FlightTakeoffIcon id="logo"/>
                    </h2>
                    <p className="subheading">Subheading Goes Here</p>
                </div>
            </div>
        )
    }
}