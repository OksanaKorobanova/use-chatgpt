'use client';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello</p>
      <button
        onClick={async () => {
          console.log('I am here');
          const response = await fetch('./api/chat-gpt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              someData: true,
            }),
          });
          if (response.ok) {
            console.log('RESPONSE', response);
          }
        }}>
        Hit API
      </button>
    </main>
  );
}
