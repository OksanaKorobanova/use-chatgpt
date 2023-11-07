'use client';
import { useState } from 'react';
import styles from './page.module.css';
import PromptForm from '@/components/PromptForm';

export default function Home() {
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (prompt) => {
    setIsLoading(true);
    const response = await fetch('./api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      setChoices(result.choices);
    }
    setIsLoading(false);
  };

  return (
    <main>
      <div className={styles.card}>
        <h1>Next.js with Chat-GPT</h1>
        <h3>Write your question</h3>
        <PromptForm isLoading={isLoading} onSubmit={onSubmit} />

        {choices.map((choice) => {
          return (
            <p key={choice.index} className={styles.response}>
              {choice.message.content}
            </p>
          );
        })}
      </div>
    </main>
  );
}
