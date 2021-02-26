import styles from "../styles/components/CompletedChallenges.module.css";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { useContext } from "react";

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span> {challengesCompleted}</span>
    </div>
  );
};
