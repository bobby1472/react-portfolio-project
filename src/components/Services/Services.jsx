import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
          <FaCode />
          <h4>
            SAP B1 Add-ons/
            <br />
            Crystal Reports
          </h4>
          <p>
            It is coding Add-ons and Crystal Report sections according to
            customer needs in the application form and additional reports into
            the system. Whether it is a transaction report or report for problem
            analysis To make timely decision.
          </p>
        </div>
        <div className={styles.services_items}>
          <FaPaintbrush />
          <h4>
            SAP B1
            <br />
            Web DI API
          </h4>
          <p>
            It is coding an additional part of the ERP system, such as an
            external Web App, in order to work together with the ERP system in
            real time to make the work flow smoothly and break the limitations
            of the ERP system.
          </p>
        </div>
        <div className={styles.services_items}>
          <FaDesktop />
          <h4>SAP B1 Imprement & Consultant</h4>
          <p>
            In the matter of providing assistance, it must be through a
            systematic analysis of the problem. and mapping the work of
            employees to match with the system to advice and find solutions to
            solve problems for customers in a complete loop.
          </p>
        </div>
        <div className={styles.services_items}>
          <BsDatabaseFill />
          <h4>
            SAP B1 Database
            <br />
            MS SQL/SAP HANA
          </h4>
          <p>
            SAP B1 system works with 2 types of databases: Microsoft SQL and SAP Hana.
            Customers can choose the database system for implementation. And I
            have expertise in both systems to customize and improve efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
