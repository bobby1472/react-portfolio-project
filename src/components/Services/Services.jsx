import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
          <FaCode />
          <h4>Web Developement</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            laudantium, expedita eaque dolor hic fugiat possimus vero, sint
            exercitationem consequatur labore quis, amet illum quo nemo velit
            harum soluta dolores.
          </p>
        </div>
        <div className={styles.services_items}>
          <FaPaintbrush />
          <h4>Web Design</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            laudantium, expedita eaque dolor hic fugiat possimus vero, sint
            exercitationem consequatur labore quis, amet illum quo nemo velit
            harum soluta dolores.
          </p>
        </div>
        <div className={styles.services_items}>
          <FaDesktop />
          <h4>Front end Consultant</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            laudantium, expedita eaque dolor hic fugiat possimus vero, sint
            exercitationem consequatur labore quis, amet illum quo nemo velit
            harum soluta dolores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
