/**
*
* Link
*
*/

import React from 'react';


import styles from './styles.css';

function Link({link}) {
  return (
    <div className={styles.link}>
        <div className={styles.votingContainer}>
            {link.voteCount}
        </div>
        <div className={styles.detailsContainer}>
            <div>
                <a href={link.url} className={styles.linkAnchor}>{link.url}</a>
            </div>
            <div className={styles.description}>{link.description}</div>
        </div>
    </div>
  );
}                          

Link.propTypes = {
  link: React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
  })
};

export default Link;
