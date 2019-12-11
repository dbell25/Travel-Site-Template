/**
 * @fileoverview Displays the home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../_common/assets/css/home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="airport">
                    <div className="content">Section Heading 1
                        <p className="content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id commodo odio. Vestibulum et purus ornare, tristique magna vel,
                            dignissim justo. In mollis cursus lacus, ac mattis felis feugiat fermentum. Donec mattis lacus neque, nec interdum urna placerat in.
                            Sed varius justo odio, dapibus consequat nulla dignissim id.
                        </p>
                    </div>
                    <Link to="/transit" role="button" className="btn btn-primary btn-lg" >Learn More</Link>
                </div>
                <div className="money">
                    <div className="content">Section Heading 2
                        <p className="content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id commodo odio. Vestibulum et purus ornare, tristique magna vel,
                            dignissim justo. In mollis cursus lacus, ac mattis felis feugiat fermentum. Donec mattis lacus neque, nec interdum urna placerat in.
                            Sed varius justo odio, dapibus consequat nulla dignissim id.
                        </p>
                    </div>
                    <Link to="/" role="button" className="btn btn-primary btn-lg">Learn More</Link>
                </div>
                <div className="camping">
                    <div className="content">Section Heading 3
                        <p className="content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id commodo odio. Vestibulum et purus ornare, tristique magna vel,
                            dignissim justo. In mollis cursus lacus, ac mattis felis feugiat fermentum. Donec mattis lacus neque, nec interdum urna placerat in.
                            Sed varius justo odio, dapibus consequat nulla dignissim id.
                        </p>
                    </div>
                    <Link to="/" role="button" className="btn btn-primary btn-lg">Learn More</Link>
                </div>
                <div className="globe">
                    <div className="content">Section Heading 4
                        <p className="content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id commodo odio. Vestibulum et purus ornare, tristique magna vel,
                            dignissim justo. In mollis cursus lacus, ac mattis felis feugiat fermentum. Donec mattis lacus neque, nec interdum urna placerat in.
                            Sed varius justo odio, dapibus consequat nulla dignissim id.
                        </p>
                    </div>
                    <Link to="/" role="button" className="btn btn-primary btn-lg">Learn More</Link>
                </div>
                <div className="footer">
                    <div className="credit">
                        <ul>
                            <h4 id="footer-heading">Photo Credit:</h4>
                            <li className="footnote"><Link to="https://www.freepik.com/free-photos-vectors/business">Business photo created by 4045 - www.freepik.com</Link></li>
                            <li className="footnote"><Link to="https://www.freepik.com/free-photos-vectors/winter">Winter photo created by jcomp - www.freepik.com</Link></li>
                            <li className="footnote"><Link to="https://www.vecteezy.com">Graphics Provided by vecteezy.com</Link></li>
                            <li className="footnote"><Link to="https://www.freepik.com/free-photos-vectors/business-card">Business card photo created by Dragana_Gordic - www.freepik.com</Link></li>
                        </ul>
                    </div>
                    <div className="social">
                        <p>Social Media Links Coming Soon</p>
                    </div>
                </div>
            </div>
        )
    }
}


