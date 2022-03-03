import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Question(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm,
        },
      });

      setResults(response.data.query.search);
    };

    if (searchTerm) {
      search();
    }
  }, [searchTerm]);

  const searchItems = results.map((item) => {
    return (
      <div key={item.title}>
        <h1>{item.title}</h1>
        <p>{item.snippet}</p>
      </div>
    );
  });

  return (
    <div>
      <label>Search Term</label>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <p>{searchTerm}</p>
      {searchItems}
    </div>
  );
}

export default Question;
