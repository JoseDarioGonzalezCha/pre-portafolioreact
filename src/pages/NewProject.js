import React from "react";
import { useNavigate } from "react-router-dom";

import { ProjectForm } from "../components/project/ProjectForm";

import styles from "./NewProject.module.css";

export const NewProject = () => {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        navigate("/projects", { Message: "Projeto criado com sucesso" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Comentário</h1>
      <p>Deixe seu comentário sobre meus projetos</p>
      <ProjectForm handleSubmit={createPost} btnText="Comentar" />
    </div>
  );
};
