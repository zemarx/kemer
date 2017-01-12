import * as React from 'react'
import {rolls} from '../../data/database.js'
import styles from './styles.css'


class RollsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={styles.main_wrapper}>
                <table className={styles.roll_list}>
                    <tbody>
                    {
                        rolls.map((roll) => {
                            return (
                                <tr key={roll.id}>
                                    <td>
                                        <div className={styles.roll_img}></div>
                                        <div className={styles.roll_name}>{roll.id}. {roll.name}</div>
                                    </td>
                                    <td>{roll.ingredients.join(', ')}</td>
                                    <td><br></br>{roll.price_norm}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RollsComponent;
