import { useState } from "react";
import styles from "./Contacts.module.css";

const Contacts = ({ t }) => {
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
        {t("contact")} <span className={styles.span}>{t("contactMe")}</span>
      </h2>
      <p className={styles.text}>{t("text")}</p>
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
            placeholder={t("fullName")}
          />
          <input
            name="Email"
            value={toSend.email}
            onChange={handleChange}
            className={styles.input}
            type="email"
            placeholder={t("address")}
          />
        </div>
        <div className={styles.inputBox}>
          <input
            name="Number"
            value={toSend.number}
            onChange={handleChange}
            className={styles.input}
            type="number"
            placeholder={t("mobileNumber")}
          />
          <input
            name="Subject"
            value={toSend.subject}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder={t("emailSubject")}
          />
        </div>
        <textarea
          onChange={handleChange}
          className={styles.textArea}
          name="Message"
          value={toSend.message}
          cols="30"
          rows="10"
          placeholder={t("yourMessage")}
        ></textarea>
        <button type="submit" className={styles.btn}>
          {t("send")}
        </button>
      </form>
    </section>
  );
};

export default Contacts;
