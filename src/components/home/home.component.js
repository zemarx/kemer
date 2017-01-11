import * as React from 'react'
import {favorites} from '../../data/database.js'
import styles from './styles.css'

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
                    this.state.dishes.map((dish) => {
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
            <div className={styles.fav_foods}>
                <h3 className={styles.fav_header}>Suositut pizzat</h3>
                <p className={styles.fav_pizzas}><Favorite dishes={favorites.pizzas}/></p>
                <br></br>{/* Temporary newlines*/}
                <br></br>
                <h3 className={styles.fav_header}>Suositut kebab ateriat</h3>
                <p className={styles.fav_kebabs}><Favorite dishes={favorites.kebabs}/></p>
                <br></br>
                <br></br>
                <h3 className={styles.fav_header}>Suositut rullat</h3>
                <p className={styles.fav_rolls}><Favorite dishes={favorites.rolls}/></p>
            </div>
        );
    }
}

export default HomeComponent;
