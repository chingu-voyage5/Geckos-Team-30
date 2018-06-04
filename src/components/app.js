import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Header from './header'
import Home from './home'
import Contacts from './contacts'
import Item from './item'

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/music' component={Item} />
                        <Route path='/twitter' component={Item} />
                        <Route path='/movies' component={Item} />
                        <Route path='/youtube' component={Item} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;