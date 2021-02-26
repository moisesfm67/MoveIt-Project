import { useState, useEffect, useContext } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished && (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <span>
            <FaCheckCircle />
          </span>
        </button>
      )}
      {isActive && !hasFinished && (
        <button
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}
        >
          Abandonar ciclo
          <span>
            <FiX />
          </span>
        </button>
      )}
      {!isActive && !hasFinished && (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
          <span>
            <FaPlay />
          </span>
        </button>
      )}
    </div>
  );
};
