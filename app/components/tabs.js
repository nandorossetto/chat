import React, { Component } from 'react';

export default class Tabs extends Component{
    constructor() {
	    super();

        this.state = {current: ''};
        this.tabs = this.tabs.bind(this);
    }

    tabs(e){
        e.preventDefault();
        this.setState({ current: 'current' });
    }
    
    render(){
        return(            
            <li>
                <a href={this.props.href} className={this.state.current} onClick={this.tabs}>
                    {this.props.text}
                </a>
            </li>
        );
    }
}