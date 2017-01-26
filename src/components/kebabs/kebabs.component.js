import * as React from 'react'
import {kebabs} from '../../data/database.js'
import styles from './kebabs.component.css'


class KebabsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={styles.main_wrapper}>
                <table className={styles.kebab_list}>
                    <tbody>
                    {
                        kebabs.map((kebab) => {
                            return (
                                <tr key={kebab.id}>
                                    <td>
                                        <div className={styles.kebab_img}></div>
                                        <div className={styles.kebab_name}>{kebab.name}</div>
                                    </td>
                                    <td className={styles.kebab_ingredients}>{kebab.ingredients.join(', ')}</td>
                                    <td className={styles.kebab_price_norm}>{kebab.price_norm}</td>
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

export default KebabsComponent;
