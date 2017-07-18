/**
 *
 * AppBar
 *
 */

import React from 'react';
import FontAwesome from 'react-fontawesome'
import styles from './styles.css';
import {Link} from 'react-router'
import IconButton from '../iconButton'

function AppBar({toggleDrawer, email}) {
    const loginLink = email || (<Link to="/login">log in</Link>)
    return (
        <div className={styles.appBar}>


            <IconButton
                icon="bars"
                buttonClass={styles.iconButton}
                iconClass={styles.icon}
                onClick={toggleDrawer}/>
            <div className={styles.heading}>
                Coder daily
            </div>
            <div className={styles.linkContainer}>
                {loginLink}
            </div>
        </div>
    );
}

AppBar.propTypes = {
    toggleDrawer: React.PropTypes.func.isRequired,
    email: React.PropTypes.string
};

export default AppBar;
