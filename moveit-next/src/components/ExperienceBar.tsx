import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300
        </span>
      </div>
      <span>600xp</span>
    </header>
  );
};
