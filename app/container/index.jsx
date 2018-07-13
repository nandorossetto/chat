import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';

import Tabs from '../components/tabs';
import Messages from '../components/messages';
import Settings from '../components/settings';
 
class App extends React.Component {
    constructor(){
    super();

    }

    render() {
        return (
            <div id="main" className="katrina-column-6">
                <menu id="tabs" className="katrina-column-12 clearfix">
                    <Tabs href={'#chat'} text={'Chat'} />
                    <Tabs href={'#settings'} text={'Settings'} />
                </menu>

                <Messages />
                <Settings />
            </div>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'));