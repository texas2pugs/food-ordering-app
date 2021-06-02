import React from 'react';

import styles from './Checkout.module.css';

const Checkout = (props) => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Confirm</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Checkout;
