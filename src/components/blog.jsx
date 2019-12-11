/**
 * @fileoverview Displays the blog tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import Navbar from './navbar';
import '../_common/assets/css/navigation.css';
import '../_common/assets/css/blog.css';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="blog">
                    Blog Posts Coming Soon
                </div>
            </div>
        )
    }
}