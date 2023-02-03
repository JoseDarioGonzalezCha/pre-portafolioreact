import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Projects.module.css";

import { Message } from "../components/layout/Message";
import { Container } from "../components/layout/Container";
import { LinkButton } from "../components/layout/LinkButton";
import { ProjectCard } from "../components/project/ProjectCard";
import { Loading } from "../components/layout/Loading";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Comentario removido con éxito!");
      })
      .catch((err) => console.log(err));
  }

  let message = "";
  if (location.state) {
    message = location.state.message;
    console.log(message);
  }

  return (
    <div className={styles.projeto_container}>
      <div className={styles.title_container}>
        <h1>My projects</h1>
        <LinkButton to="/newproject" text="contact me" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>No tienes ningún comentario</p>
        )}
      </Container>
    </div>
  );
};
