import React from "react";
import styles from "./Footer.module.css";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Portafólio José González</span> &copy; 2023
      </p>
    </footer>
  );
};
