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
                                        <div className={styles.pizza_name}>{pizza.id}. {pizza.name}</div>
                                    </td>
                                    <td>{pizza.ingredients.join(', ')}</td>
                                    <td>Norm. / Iso<br></br>{pizza.price_norm} / {pizza.price_big}</td>
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
