import React from "react";
import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className={styles.port_con} id="portJump">
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img5.pic.in.th/file/secure-sv1/Add-ons_Cover.jpg"
              alt=""
            />
          </Tilt>
          <p>Project SAP B1 Add-ons</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img2.pic.in.th/pic/CRReport_Cover.jpg"
              alt=""
            />
          </Tilt>
          <p>Project Crystal Report</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img2.pic.in.th/pic/WEBDIAPI_Cover.jpg"
              alt=""
            />
          </Tilt>
          <p>Project Web DI API</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img2.pic.in.th/pic/React_Cover.jpg"
              alt=""
            />
          </Tilt>
          <p>Project React Interface to SAP</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img5.pic.in.th/file/secure-sv1/MasterDataCleansing_Cover.jpg"
              alt=""
            />
          </Tilt>
          <p>Project SAP Master Data Cleansing</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://img5.pic.in.th/file/secure-sv1/SQLTraining_Cover.jpg"
              alt=""
            />
          </Tilt>
          <p>Project SAP SQL Training</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
