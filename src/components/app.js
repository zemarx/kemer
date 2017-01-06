import * as React from 'react'
import Radium from 'radium'
import {Link as ReactRouterLink} from 'react-router'

const Link = Radium(ReactRouterLink);

const styles = {
    nav: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        width: '100%',
        padding: '35px',
        textDecoration: 'none',
        textAlign: 'center',
        fontSize: '30px',
        color: '#FFFFFF',
        backgroundColor: '#808080',

        ':hover': {
            color: 'red'
        }
    }
};

@Radium
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <nav style={styles.nav}>
                    <Link style={styles.link} to={'/pizzas'}>Pizzat</Link>
                    <Link style={styles.link} to={'/kebabs'}>Kebabit</Link>
                    <Link style={styles.link} to={'/salads'}>Salaatit</Link>
                    <Link style={styles.link} to={'/drinks'}>Juomat</Link>
                    <Link style={styles.link} to={'/about'}>Yhteystiedot</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}


export default App;
