import React, { useState } from "react";
import styles from "./LoginPageStyle.module.css";
import ReactCardFlip from "react-card-flip";

function LoginPage() {
  const [isFlip, setIsFlip] = useState(false);
  const handleFlip = () => {
    setIsFlip(!isFlip);
  };
  return (
    <div>
      <div className={styles.container}>
        <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
          <div className={`${styles.card} ${styles.card_front}`}>
            <img
              src="https://assets8.lottiefiles.com/datafiles/kdNSsX7MXeXXT1u/data.json"
              alt=""
            />
            <h1>login to daftary</h1>
            <button onClick={handleFlip}>Sign up</button>
          </div>

          <div className={`${styles.card} ${styles.card_back}`}>
            <button onClick={handleFlip}>Sign in</button>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default LoginPage;
