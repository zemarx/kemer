import * as React from 'react'
import {favorites} from '../../data/database.js'

class Favorite extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes: this.props.dishes
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.dishes.map(function(dish) {
                        return (
                            <div key={dish.id}> {dish.name} : {dish.ingredients} {dish.price_norm} / {dish.price_big}</div>
                        )
                    })
                }
            </div>
        )
    }
}

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Favorite dishes={favorites.pizzas}/>
                <Favorite dishes={favorites.kebabs}/>
                <Favorite dishes={favorites.rolls}/>
            </div>
        );
    }
}

export default HomeComponent;
