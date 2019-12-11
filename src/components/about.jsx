/**
 * @fileoverview Displays the public about tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import '../_common/assets/css/about.css';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h4 className="about-subtitle">About Page</h4>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh finibus, dapibus est quis, iaculis nisl. 
                    Morbi in pretium odio, tincidunt porta neque. Ut dignissim enim sit amet justo vestibulum convallis. Duis sit amet massa 
                    rhoncus ex sodales dapibus. Donec semper nibh vel purus egestas luctus. Praesent tempor sit amet elit quis porta. Nulla facilisi. 
                    Nunc convallis lacus et eros accumsan iaculis.
                    <br /> 
                    Etiam ornare lectus nec maximus ultricies. Pellentesque tempor lacus dui, non 
                    gravida neque vehicula in. Nunc hendrerit, dui in facilisis scelerisque, felis nisl ultrices magna, sit amet fringilla purus mauris 
                    et quam. Proin dignissim dolor tellus, eu mattis tortor elementum vel. Praesent venenatis libero ac convallis malesuada. Nam efficitur 
                    rutrum nisi at lacinia. Proin congue purus a felis efficitur ornare. Nulla facilisis luctus consectetur. In venenatis sem nec pulvinar 
                    faucibus. Donec tincidunt mauris ac dolor tristique pretium.
                    <br /> 
                    Cras eu nisi ac odio auctor aliquam. Integer vel orci ut metus aliquet 
                    consequat. Sed pellentesque, risus quis vehicula tempor, mi massa convallis mauris, non mattis libero tortor ut odio. Mauris justo orci, 
                    tincidunt vel urna at, sagittis volutpat arcu. Sed luctus iaculis massa non pretium.
                    <br /> 
                    Pellentesque id ipsum at odio aliquam semper. Aliquam bibendum pharetra augue, id eleifend nisl elementum vitae. Donec erat enim, semper 
                    congue ultricies eget, varius ac sapien. Curabitur sed lobortis ante. Nam eleifend fringilla dolor, ut sodales augue lobortis vitae. 
                    Sed risus mauris, eleifend ac ex non, porta tempor neque. Nullam elementum nibh nunc, quis ultricies justo hendrerit sed. Proin leo augue, 
                    commodo vitae ultricies eu, sodales eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                    Praesent nec volutpat urna.
                </p>
                <h4 className="about-subtitle">Subheading</h4>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nibh finibus, dapibus est quis, iaculis nisl. 
                    Morbi in pretium odio, tincidunt porta neque. Ut dignissim enim sit amet justo vestibulum convallis. Duis sit amet massa 
                    rhoncus ex sodales dapibus. Donec semper nibh vel purus egestas luctus. Praesent tempor sit amet elit quis porta. Nulla facilisi. 
                    Nunc convallis lacus et eros accumsan iaculis.
                </p>
            </div>
        )
    }
}