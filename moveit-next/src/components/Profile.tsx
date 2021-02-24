import styles from "../styles/components/Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/moisesfm67.png" alt="Moises" />
      <div>
        <strong>Moises Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};
