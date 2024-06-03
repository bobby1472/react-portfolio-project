import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";


function Navbar() {
  const [isToggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!isToggle); // false + false = true
  }



  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">Saranyu Kumsuwan</a>
          </div>
          <ul>
            <li>
              <a href="#skillsJump">Skills</a>
            </li>
            <li>
              <a href="#portJump">Portfolio</a>
            </li>
            <li>
              <a href="#contJump">Contact</a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="#contJump">Call Me</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggle ? (
          <>
            <ul className={styles.mobile_menu}>
              <li>
                <a href="#skillsJump">Skills</a>
              </li>
              <li>
                <a href="#portJump">Portfolio</a>
              </li>
              <li>
                <a href="#contJump">Contact</a>
              </li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#contJump">Call Me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
