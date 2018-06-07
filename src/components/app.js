import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Header from './header'
import Home from './home'
import Item from './item'
import Footer from './footer'

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div className="main-container">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/music' component={Item} />
                        <Route path='/twitter' component={Item} />
                        <Route path='/movies' component={Item} />
                        <Route path='/youtube' component={Item} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
