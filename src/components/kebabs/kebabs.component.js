import * as React from 'react'
import {kebabs} from '../../data/database.js'
import styles from './styles.css'


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
                                        <div>{kebab.name}</div>
                                    </td>
                                    <td>{kebab.ingredients.join(', ')}</td>
                                    <td>{kebab.price_norm}</td>
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
