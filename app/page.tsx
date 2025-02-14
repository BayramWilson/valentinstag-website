"use client";

import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showHeart, setShowHeart] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonMoved, setIsButtonMoved] = useState(false);

  const handleYesClick = () => {
    setShowHeart(true);
  };

  const handleNoClick = () => {
    const buttonWidth = 100; // Approximate width of the button
    const buttonHeight = 50; // Approximate height of the button
    const range = 50; // Movement range in pixels

    // Calculate new position within the range
    const x = noButtonPosition.x + (Math.random() * (range * 2) - range);
    const y = noButtonPosition.y + (Math.random() * (range * 2) - range);

    // Ensure the button stays within the viewport
    const clampedX = Math.max(0, Math.min(window.innerWidth - buttonWidth, x));
    const clampedY = Math.max(0, Math.min(window.innerHeight - buttonHeight, y));

    setNoButtonPosition({ x: clampedX, y: clampedY });
    setIsButtonMoved(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Valentinstag Frage</title>
        <meta name="description" content="Stephi, du bist mein Herz und meine Seele. Willst du mein Valentinstag-Schatz sein?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.loveBox}>
          {!showHeart ? (
            <>
              <div className={styles.letterAnimation}>
                <p>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</p>
              </div>
              <h1 className={styles.title}>Willst du mein Valentinstag-Schatz sein?</h1>
              <div className={styles.buttonContainer}>
                <button className={styles.yesButton} onClick={handleYesClick}>
                  Ja, für immer!
                </button>
                <button
                  className={styles.noButton}
                  onClick={handleNoClick}
                  style={isButtonMoved ? { position: 'absolute', left: noButtonPosition.x, top: noButtonPosition.y } : {}}
                >
                  Nein, ich bin schüchtern
                </button>
              </div>
            </>
          ) : (
            <img src="/gifs/sesame.gif" alt="Sesame GIF" className={styles.gif} />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        © 2025 Bayram Wilson
      </footer>
    </div>
  );
}
