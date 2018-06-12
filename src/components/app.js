import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Header from './header'
import Home from './home'
import Item from './item'
import Footer from './footer'
import Advice from './random-advice'
import Gif from './gifs'

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div className="main-container">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/advice' component={Advice} />
                        <Route path='/twitter' component={Item} />
                        <Route path='/movies' component={Item} />
                        <Route path='/Gif' component={Gif} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
