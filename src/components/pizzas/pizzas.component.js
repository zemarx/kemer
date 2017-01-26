import * as React from 'react'
import {pizzas} from '../../data/database.js'
import styles from './pizzas.component.css'


class PizzasComponent extends React.Component {
    constructor(props) {
        super(props);

        this.construct_price = this.construct_price.bind(this);
    }

    construct_price (pizza) {
        if (pizza.price_big) {
            return (<td>Norm. / Iso<br></br>{pizza.price_norm} / {pizza.price_big}</td>)
        } else {
            return (<td>Norm.<br></br>{pizza.price_norm}</td>)
        }
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
                                    {this.construct_price(pizza)}
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
