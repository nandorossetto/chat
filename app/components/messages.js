import React, { Component } from 'react';

export default class Messages extends Component{
    constructor() {
	    super();

        this.state = {};
    }
    
    render(){
        return(
            <section id="messages" className="clearfix">   
                <article className="all-messages">             
                    <div className="row">
                        <p className="my-message katrina-column-7">
                            <strong>Username</strong>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pellentesque mauris.</span>
                        </p>
                    </div>
                    <div className="row">
                        <p className="message katrina-column-7">
                            <strong>Username</strong>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pellentesque mauris.</span>
                        </p>
                    </div>
                </article>
                <form method="">
                    <div className="row">
                        <input className="katrina-column-10" type="text" />
                        <button className="katrina-column-2" type="submit">Submit</button>
                    </div>
                </form>
            </section> 
        );
    }
}