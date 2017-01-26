import * as React from 'react'
import {Link} from 'react-router'
import styles from './app.css'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <Link className={styles.link} to={'/'}>Pääsivu</Link>
                        <Link className={styles.link} to={'/pizzas'}>Pizzat</Link>
                        <Link className={styles.link} to={'/kebabs'}>Kebabit</Link>
                        <Link className={styles.link} to={'/rolls'}>Rullat</Link>
                        <Link className={styles.link} to={'/drinks'}>Juomat</Link>
                        <Link className={styles.link} to={'/about'}>Yhteystiedot</Link>
                    </nav>
                </header>
                {this.props.children}
            </div>

        );
    }
}


export default App;
