import * as React from 'react'
import {drinks} from '../../data/database.js'
import styles from './styles.css'


class DrinksComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={styles.main_wrapper}>
                <table className={styles.drink_list}>
                    <tbody>
                    {
                        drinks.map((drink) => {
                            return (
                                <tr key={drink.id}>
                                    <td>
                                        <div className={styles.drink_img}></div>
                                        <div className={styles.drink_name}>{drink.name}</div>
                                    </td>
                                    <td className={styles.drink_price}>{drink.price_norm} / {drink.price_big}</td>
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

export default DrinksComponent;
