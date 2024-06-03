import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Training how to use SAP B1 very clear. Makes employees work flexibly
            Including linking the SAP B1 system with Integradion Systems to work
            seamlessly.{" "}
          </p>
          <img
            src="https://media.licdn.com/dms/image/C5603AQHm_StAfSgNkA/profile-displayphoto-shrink_800_800/0/1638418838497?e=1723075200&v=beta&t=X62uOXz44pA9nExmFjITA_amby6l_Zdf33BK6HgKz_Y"
            alt=""
          />
          <h4>Arnon Munkhetwit</h4>
          <p className={styles.bio}>Senior Solution Engineering</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Very good teaching in the database section. Helps us to have a
            better understanding of working with the SAP B1 system's database.
            Including how to plug it into the Crystal Report.{" "}
          </p>
          <img
            src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.6435-9/71403112_10157566698588728_4450842843266678784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=40tvRJVzA74Q7kNvgGFfyK3&_nc_ht=scontent.fbkk9-2.fna&oh=00_AYD6IAlsbSSLh3EhwBBf3mLQA-4iGqxI34yyuIjdtjJUBg&oe=66835E05"
            alt=""
          />
          <h4>Natnapha Phuengngam</h4>
          <p className={styles.bio}>Data Analyst</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            As accounting department, COA mapping and the work of the
            accounting department were very good and greatly reduced duplication
            of every department.{" "}
          </p>
          <img
            src="https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/299865270_106736048821030_1024042210004350952_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uASDVjmLTIAQ7kNvgG0-QRn&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYCuOnOLa_g-4rBymMNL9MqtxTsDKk7WGiMYhpBW72XuiA&oe=6661D70A"
            alt=""
          />
          <h4>Sirikorn Rodphun</h4>
          <p className={styles.bio}>Accounting & Financial Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
