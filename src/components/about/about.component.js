import * as React from 'react'
import styles from './styles.css'

class AboutComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className={styles.mydiv}>
                About
            </div>
        );
    }
}

export default AboutComponent;
