import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.title}>
        Contact <span className={styles.span}>Me!</span>
      </h2>
      <form className={styles.form} action="#">
        <div className={styles.inputBox}>
          <input className={styles.input} type="text" placeholder="Full name" />
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="number"
            placeholder="Mobile Number"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Email Subject"
          />
        </div>
        <textarea
          className={styles.textArea}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <input type="submit" value="Send Message" className={styles.btn} />
      </form>
    </section>
  );
};

export default Contacts;
