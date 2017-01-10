import * as React from 'react'
import {pizzas} from '../../data/database.js'


class PizzasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <ul>
                    {
                        pizzas.map((pizza) => {
                            return (
                                <li key={pizza.id}>
                                    {pizza.name}
                                    {pizza.ingredients.join(', ')}
                                    {pizza.price_norm} / {pizza.price_big}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default PizzasComponent;
