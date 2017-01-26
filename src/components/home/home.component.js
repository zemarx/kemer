import * as React from 'react'
import {favorites} from '../../data/database.js'
import styles from './home.component.css'

class Favorite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: this.props.dishes
        }
    }

    render () {
        return (
            <div className={styles.fav_wrapper}>
                {
                    this.state.dishes.map((dish) => {
                        let price = dish.price_norm;
                        if (dish.price_big) {
                            price += ' / ' + dish.price_big;
                        }

                        return (
                            <div className={styles.fav_info} key={dish.id}>
                                <div>{dish.name}</div>
                                <div></div>
                                <div>{dish.ingredients.join(', ')}</div>
                                <div>{price}</div>
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
                <Favorite dishes={favorites.pizzas}/>
                <br></br>{/* Temporary newlines*/}
                <br></br>
                <h3 className={styles.fav_header}>Suositut kebab ateriat</h3>
                <Favorite dishes={favorites.kebabs}/>
                <br></br>
                <br></br>
                <h3 className={styles.fav_header}>Suositut rullat</h3>
                <Favorite dishes={favorites.rolls}/>
            </div>
        );
    }
}

export default HomeComponent;
