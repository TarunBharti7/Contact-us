import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
        <nav className={`${styles.navbar} container`}>
            <div className='logo'>
                <h1> 📓 </h1>
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar