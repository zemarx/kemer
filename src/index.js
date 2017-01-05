const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, Link, hashHistory } from 'react-router'
import AboutComponent from './components/about/about.component'
import TestComponent from './components/test/test.component'

const App = React.createClass({
    render: function () {
        return (
            <div id="main">
                <nav>Mybe navigation?</nav>


                Pizzat

                Kebabit

                Salaatit

                Juomat


                <Link to={'/about'}>About</Link>
                <Link to={'/test'}>Test</Link>
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={AboutComponent}/>
            <Route path="test" component={TestComponent}/>
        </Route>
    </Router>
    , document.getElementById('app')
);