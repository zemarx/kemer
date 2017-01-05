import React, {Component} from 'react'
import {Link} from 'react-router'

class App extends Component {
    render () {
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
}

export default App;
