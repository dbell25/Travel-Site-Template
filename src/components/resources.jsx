/**
 * @fileoverview Displays the resource link tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import Navbar from './navbar';
import '../_common/assets/css/navigation.css';
import '../_common/assets/css/resources.css';

export default class Resources extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="resources">
                    Resource Links Coming Soon
                </div>
            </div>
        )
    }
}