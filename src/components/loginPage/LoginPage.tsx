import React, { useState } from "react";
import styles from "./LoginPageStyle.module.css";
import ReactCardFlip from "react-card-flip";
import LoginCard from "./LoginCard/LoginCard";
function LoginPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <LoginCard />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
