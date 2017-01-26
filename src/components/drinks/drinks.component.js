import * as React from 'react'
import {drinks} from '../../data/database.js'
import styles from './drinks.component.css'


class DrinksComponent extends React.Component {
    constructor(props) {
        super(props);

        this.construct_price = this.construct_price.bind(this);
    }

    construct_price (drink) {
        if (drink.price_big) {
            return (<td>0.5L / 1.5L<br></br>{drink.price_norm} / {drink.price_big}</td>)
        } else {
            return (<td>0.5L<br></br>{drink.price_norm}</td>)
        }
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
                                    {this.construct_price(drink)}
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
