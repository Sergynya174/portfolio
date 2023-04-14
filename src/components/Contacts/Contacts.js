import { useState } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
    subject: "",
  });

  const handleChange = (evt) => {
    setToSend({ ...toSend, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className={styles.contacts} id="contact">
      <h2 className={styles.title}>
        Contact <span className={styles.span}>Me</span>
      </h2>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <input
            name="name"
            value={toSend.name}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Full name"
          />
          <input
            name="email"
            value={toSend.email}
            onChange={handleChange}
            className={styles.input}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            name="number"
            value={toSend.number}
            onChange={handleChange}
            className={styles.input}
            type="number"
            placeholder="Mobile Number"
          />
          <input
            name="subject"
            value={toSend.subject}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Email Subject"
          />
        </div>
        <textarea
          onChange={handleChange}
          className={styles.textArea}
          name="message"
          value={toSend.message}
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
