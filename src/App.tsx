import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { simulate } from './functions/problem';

const App: Component = () => {
  return (
    <>
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>

      <h1>
        Result {simulate(100, 1)}
      </h1>
    </>
  );
};

export default App;
