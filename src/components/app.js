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
                <nav className={styles.nav}>
                    <Link className={styles.link} to={'/'}>Pääsivu</Link>
                    <Link className={styles.link} to={'/pizzas'}>Pizzat</Link>
                    <Link className={styles.link} to={'/kebabs'}>Kebabit</Link>
                    <Link className={styles.link} to={'/rolls'}>Rullat</Link>
                    <Link className={styles.link} to={'/drinks'}>Juomat</Link>
                    <Link className={styles.link} to={'/about'}>Yhteystiedot</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}


export default App;
