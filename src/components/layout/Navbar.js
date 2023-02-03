import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src="https://via.placeholder.com/50" alt="icon" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company"> Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newproject">Novo Projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
