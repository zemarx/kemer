import * as React from 'react'
import {pizzas} from '../../data/database.js'
import styles from './styles.css'


class PizzasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={styles.main_wrapper}>
                <table className={styles.pizza_list}>
                    <tbody>
                    {
                        pizzas.map((pizza) => {
                            return (
                                <tr key={pizza.id}>
                                    <td>
                                        <div className={styles.pizza_img}></div>
                                        <div className={styles.pizza_name}>{pizza.name}</div>
                                    </td>
                                    <td className={styles.pizza_ingredients}>{pizza.ingredients.join(', ')}</td>
                                    <td className={styles.pizza_price_norm}>{pizza.price_norm} / {pizza.price_big}</td>
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

export default PizzasComponent;
