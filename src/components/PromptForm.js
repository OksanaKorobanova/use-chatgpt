import { useState } from 'react';
import styles from './PromptForm.module.css';

const PromptForm = ({ isLoading, onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  return (
    <form
      onSubmit={(el) => {
        el.preventDefault();

        if (prompt === '') {
          return;
        }

        onSubmit(prompt);
        setPrompt('');
      }}>
      <label>Question</label>
      <input
        className={styles.input}
        type='text'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input type='submit' disabled={isLoading} className={styles.btn} />
    </form>
  );
};

export default PromptForm;
