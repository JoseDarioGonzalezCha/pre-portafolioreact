import React from "react";

import { LinkButton } from "../components/layout/LinkButton";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        Welcome to my <span>portfolio</span>
      </h1>
      <img src="https://via.placeholder.com/150" alt="imagen description" />
      <p>
        My name is Jose Gonzalez and I am an experienced React frontend
        developer with skills in HTML, CSS and JavaScript. I studied programming
        at the Toti Institute, where I completed my studies in 2021. I also
        studied in the DEVinHouse program in Brasil, where I learned a lot about
        web development.
      </p>
      <p>
        In addition to my technical skills, I also possess strong soft skills
        such as effective communication, organization (breaking down larger
        problems into smaller, manageable tasks), research, and resilience. I
        have knowledge in Agile methodologies, as I regularly practice SCRUM
        ceremonies in my daily work at Alura Latam.
      </p>
      <p>
        Currently, I work as a frontend instructor at Alura Latam, where I am
        responsible for creating and executing challenges for the students of
        the ONE Oracle Next Education program. These challenges include building
        frontend applications with both pure HTML, CSS and JavaScript, as well
        as with React. I also lead live coding classes, where I build the code
        for the different challenges live and students can ask questions. In
        addition, I create code videos to help students better understand web
        development.
      </p>
      <p>
        My standout skills include my experience with React, HTML, CSS and
        JavaScript, as well as my skills as an instructor and presenter in live
        classes and videos. I have strong interpersonal skills and a passion for
        web development, always eager to learn more and improve my skills.
      </p>
      <p>
        Among my most significant projects, I highlight my participation in
        creating a web application for a small business. I was responsible for
        building the user interface with React and worked closely with the
        back-end team to ensure optimal user experience.
      </p>
      <p>
        In conclusion, I am a highly skilled React frontend developer with
        experience in HTML, CSS and JavaScript. I possess a strong set of soft
        skills such as effective communication, organization, research and
        resilience, and knowledge in Agile methodologies. My experience as an
        instructor and my passion for web development have allowed me to acquire
        valuable skills and a wealth of technical knowledge. Thank you for
        considering my portfolio and I hope to have the opportunity to work with
        you soon.
      </p>
      <LinkButton to="/projects" text="see projects" />
    </section>
  );
};
