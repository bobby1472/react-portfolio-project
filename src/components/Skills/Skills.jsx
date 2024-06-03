import React from "react";
import styles from "./Skills.module.css";
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from "react-icons/fa6";
import { SiSap } from "react-icons/si";
import { TbFileTypeSql, TbApi } from "react-icons/tb";

function Skills() {
  return (
    <div className={styles.skills_con} id="skillsJump">
      <h3 className={styles.skills_title}>My skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
          <SiSap />
        </li>
        <li>
          <TbFileTypeSql />
        </li>
        <li>
          <TbApi />
        </li>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaSass />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNode />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
