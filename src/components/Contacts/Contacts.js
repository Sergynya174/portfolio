import { useState } from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const [toSend, setToSend] = useState({
    Name: "",
    Email: "",
    Message: "",
    Mobile: "",
    Subject: "",
  });

  const handleChange = (evt) => {
    setToSend({ ...toSend, [evt.target.Name]: evt.target.value });
  };

  return (
    <section className={styles.contacts} id="contact">
      <h2 className={styles.title}>
        Contact <span className={styles.span}>Me</span>
      </h2>
      <form
        action="https://formspree.io/f/mpzeknrn"
        method="POST"
        className={styles.form}
      >
        <div className={styles.inputBox}>
          <input
            name="Name"
            value={toSend.name}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Full name"
          />
          <input
            name="Email"
            value={toSend.email}
            onChange={handleChange}
            className={styles.input}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            name="Number"
            value={toSend.number}
            onChange={handleChange}
            className={styles.input}
            type="number"
            placeholder="Mobile Number"
          />
          <input
            name="Subject"
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
          name="Message"
          value={toSend.message}
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contacts;
