import * as React from 'react'
import { Router, hashHistory } from 'react-router'
import App from './components/app'
import HomeComponent from './components/home/home.component'
import AboutComponent from './components/about/about.component'
import DrinksComponent from './components/drinks/drinks.component'
import PizzasComponent from './components/pizzas/pizzas.component'
import KebabsComponent from './components/kebabs/kebabs.component'
import RollsComponent from './components/rolls/rolls.component'

const ROUTES = {
    path: '/',
    component: App,
    indexRoute: { component: HomeComponent },
    childRoutes: [
        { path: 'about', component: AboutComponent },
        { path: 'pizzas', component: PizzasComponent },
        { path: 'kebabs', component: KebabsComponent },
        { path: 'rolls', component: RollsComponent },
        { path: 'drinks', component: DrinksComponent }
    ]
};

class AppContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Router history={hashHistory} routes={ROUTES}></Router>
        );
    }
}

export default AppContainer;
