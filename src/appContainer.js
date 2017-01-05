import React, {Component} from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/app'
import AboutComponent from './components/about/about.component'
import DrinksComponent from './components/drinks/drinks.component'
import PizzasComponent from './components/pizzas/pizzas.component'
import KebabsComponent from './components/kebabs/kebabs.component'
import SaladsComponent from './components/salads/salads.component'

const ROUTES = {
    path: '/',
    component: App,
    indexRoute: { component: App },
    childRoutes: [
        { path: 'about', component: AboutComponent },
        { path: 'pizzas', component: PizzasComponent },
        { path: 'kebabs', component: KebabsComponent },
        { path: 'salads', component: SaladsComponent },
        { path: 'drinks', component: DrinksComponent }
    ]
};

class AppContainer extends Component {
    render () {
        return (
            <Router history={hashHistory} routes={ROUTES}></Router>
        );
    }
}

export default AppContainer;
