import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fNameHandler = (event) => {
    setFname(event.target.value);
  };
  const lNameHandler = (event) => {
    setLname(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    Swal.fire("Saved!", "", "success");
    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };

  const alertMessage = () => {
    alert("Your email send successfully. Thank you");
    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    
    handleClick();
    
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          //alertMessage();
         
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className={styles.contact_wrapper} id="contJump">
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3>Get in touch</h3>
          <p className={styles.contact_desc}>
            Inquire about system information. Talk about your work process, I am
            ready to help you with the work process.
          </p>
          <p className={styles.contact_address}>
            295/140 Life in the garden, Banchang, Banchang, <br />
            Rayong 21130 Thailand
          </p>
          <p>
            <FaPhone /> (+66) 64 959 9361
          </p>
          <p>
            <FaEnvelope /> u.saranyu@outlook.com
          </p>
        </div>
        <div className={styles.contact_form}>
          <form ref={form} onSubmit={sendEmail} action="#">
            <div className={styles.input_group}>
              <div>
                <label htmlFor="first name">First Name</label>
                <input
                  value={fname}
                  onChange={fNameHandler}
                  type="text"
                  name="user_fname"
                  placeholder="eg. Saranyu"
                  required
                />
              </div>
              <div>
                <div>
                  <label htmlFor="last name">Last Name</label>
                  <input
                    value={lname}
                    onChange={lNameHandler}
                    type="text"
                    name="user_lname"
                    placeholder="eg. Kumsuwan"
                    required
                  />
                </div>
              </div>
            </div>
            <label htmlFor="email address">Email Address</label>
            <input
              value={email}
              onChange={emailHandler}
              type="email"
              name="user_email"
              placeholder="eg. u.saranyu@outlook.com"
              required
            />
            <label htmlFor="message">Your message</label>
            <textarea
              value={message}
              onChange={messageHandler}
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Type here"
              required
            ></textarea>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
