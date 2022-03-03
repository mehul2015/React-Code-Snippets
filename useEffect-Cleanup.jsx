import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HooksDemo(props) {
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
      console.log(response);
      setResults(response.data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const searchItems = results.map((item) => {
    return (
      <div key={item.title}>
        <h1>
          {' '}
          <a href={`https://en.wikipedia.org?curid=${item.pageid}`}>
            {item.title}
          </a>
        </h1>
        <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
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

export default HooksDemo;
