import * as React from 'react'
import {Link} from 'react-router'
import styles from './styles.css'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <nav styleName={styles.nav}>
                    <Link styleName={styles.link} to={'/pizzas'}>Pizzat</Link>
                    <Link styleName={styles.link} to={'/kebabs'}>Kebabit</Link>
                    <Link styleName={styles.link} to={'/salads'}>Salaatit</Link>
                    <Link styleName={styles.link} to={'/drinks'}>Juomat</Link>
                    <Link styleName={styles.link} to={'/about'}>Yhteystiedot</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}


export default App;
