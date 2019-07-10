import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Radial from './Radial';
import JimRhodes from './JimRhodes';
import Dynaco from './Dynaco';
import Dogwood from './Dogwood';
import InwardEdward from './InwardEdward';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="Portfolio">     
                <div className="wrapper">
                    <Header />
                    <div className="content">            
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/radial" component={Radial} />
                            <Route path="/jimrhodes" component={JimRhodes} />
                            <Route path="/dynaco" component={Dynaco} />
                            <Route path="/dogwood" component={Dogwood} />
                            <Route path="/inwardedward" component={InwardEdward} />
                        </Switch>            
                    </div>{/* end content  */}
                </div>{/* end wrapper */}
                <Footer />
            </div>
        )
    }
}
export default withRouter(App);