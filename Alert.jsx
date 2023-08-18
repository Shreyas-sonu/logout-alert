import React from 'react'
import Style from './alert.module.css'

const Alert = () => {
  return (
      <aside className={Style.logoutAlertBlock}>
        <header></header>
        <h2>Logout</h2>
        <main>Are you sure want to Logout?</main>
        <div>
          <button type="button">No</button>
          <button type="button">Yes</button>
        </div>
      </aside>
  );
}

export default Alert;
