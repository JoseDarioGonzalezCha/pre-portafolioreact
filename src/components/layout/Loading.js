import React from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <p>Loading...</p>
      <img
        className={styles.loader}
        src="https://via.placeholder.com/50"
        alt="Loading"
      />
    </div>
  );
};
