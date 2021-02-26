import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { GetServerSideProps } from "next";

import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { isNull } from "util";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { level, currentExperience, challengesCompleted } = props;

  const levelIsNotNull = () => {
    if (!level) {
      return;
    }

    if (level === null) {
      return 1;
    }

    return level;
  };
  const currentExperienceIsNotNull = () => {
    if (!currentExperience) {
      return;
    }

    if (currentExperience === null) {
      return 1;
    }

    return currentExperience;
  };
  const challengesCompletedIsNotNull = () => {
    if (!challengesCompleted) {
      return;
    }

    if (challengesCompleted === null) {
      return 1;
    }

    return challengesCompleted;
  };

  return (
    <ChallengesProvider
      level={levelIsNotNull()}
      currentExperience={currentExperienceIsNotNull()}
      challengesCompleted={challengesCompletedIsNotNull()}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
