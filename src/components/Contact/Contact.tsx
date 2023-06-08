import React from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

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
            <motion.button
              type="submit"
              className={styles.submitButton}
              initial={{
                boxShadow: "1px 2px 2px rgba(0, 0, 0, 0.3)",
                x: 0,
                y: 0,
                backgroundColor: "#f45858",
              }}
              whileHover={{
                backgroundColor: "#ef6767",
              }}
              whileTap={{
                boxShadow: "inset 0px -2px 3px #f45858",
                backgroundColor: "#d04949",
                scale: 0.97,
                transformOrigin: "center center",
              }}
              transition={{ type: "tween", duration: 0.05, ease: "easeInOut" }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
