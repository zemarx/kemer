const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, Link, hashHistory } from 'react-router'
import AboutComponent from './components/about/about.component'
import DrinksComponent from './components/drinks/drinks.component'
import PizzasComponent from './components/pizzas/pizzas.component'
import KebabsComponent from './components/kebabs/kebabs.component'
import SaladsComponent from './components/salads/salads.component'

const App = React.createClass({
    render: function () {
        return (
            <div id="navigation">
                <nav>
                    <Link to={'/pizzas'}>Pizzat</Link>
                    <Link to={'/kebabs'}>Kebabit</Link>
                    <Link to={'/salads'}>Salaatit</Link>
                    <Link to={'/drinks'}>Juomat</Link>
                    <Link to={'/about'}>Yhteystiedot</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={AboutComponent}/>
            <Route path="pizzas" component={PizzasComponent}/>
            <Route path="kebabs" component={KebabsComponent}/>
            <Route path="salads" component={SaladsComponent}/>
            <Route path="drinks" component={DrinksComponent}/>
        </Route>
    </Router>
    , document.getElementById('app')
);