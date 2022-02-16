import React, { useEffect, useState } from 'react';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
      <h1>Ali's first Gatsby website</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://alha.hashnode.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          My Hashnode
        </a>
        !
      </h2>

      <br />
      <h2>The date is</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
