import React from 'react';

import eatsImage from '../../assets/vinicius-benedit--1GEAA8q3wk-unsplash.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactEats</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={eatsImage} alt="Delicious sushi" />
      </div>
    </React.Fragment>
  );
};

export default Header;
