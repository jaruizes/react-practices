import React, { Component } from 'react';
class About extends Component {
    getUrl() {
        return this.props.url;
    }
    render() {
        return <a href={this.getUrl()}
                  title={this.props.label}
                  target="_blank">{this.props.label}
        </a> }
}
export default About;