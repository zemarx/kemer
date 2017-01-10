import * as React from 'react'
import {favorites} from '../../data/database.js'

class Favorite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: this.props.dishes
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.dishes.map(function(dish) {

                        let price = dish.price_norm;
                        if (dish.price_big) {
                            price += ' / ' + dish.price_big;
                        }

                        return (
                            <div key={dish.id}>
                                {dish.name} : {dish.ingredients.join(', ')} {price}
                            </div>
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
                Suositut pizzat
                <Favorite dishes={favorites.pizzas}/>
                <br></br>{/* Temporary newlines*/}
                <br></br>
                Suositut kebab ateriat
                <Favorite dishes={favorites.kebabs}/>
                <br></br>
                <br></br>
                Suositut rullat
                <Favorite dishes={favorites.rolls}/>
            </div>
        );
    }
}

export default HomeComponent;
