import React from "react";
import styles from "./Contact.module.scss";

function Contact(): React.ReactElement {
  return (
    <>
      <div className={styles.contactContainer}>
        <h1 className={styles.h1}>Get in touch</h1>
        <form className={styles.contactForm}>
          <div className={styles.nameAndEmailContainer}>
            <div className={styles.email}>
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
              />
            </div>
            <div className={styles.space} />
            <div className={styles.name}>
              <label htmlFor="name" />
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Your name (optional)"
              />
            </div>
          </div>
          <div className={styles.textAreaContainer}>
            <label htmlFor="message" />
            <textarea
              name="message"
              id="message"
              placeholder="Feel free to message me about anything"
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
