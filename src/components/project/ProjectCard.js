import React from "react";
import { Link } from "react-router-dom";
import { SiVercel } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>

      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <AiOutlineGithub /> Repository
        </Link>
        <button onClick={remove}>
          <SiVercel /> See site
        </button>
      </div>
    </div>
  );
};
