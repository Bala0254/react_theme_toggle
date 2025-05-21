import React, { useState, useEffect, useMemo } from 'react';

const dataList = [
  'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
  'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
];

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const SearchWithDebounce = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = dataList.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), []);

  useEffect(() => {
    debouncedSearch(input);
  }, [input, debouncedSearch]);

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        style={{
          padding: '8px',
          width: '100%',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      <ul>
        { results.length > 0 ? results.map((item, idx) => (
          <li key={idx}>{item}</li>
        )) : <p>No Results found</p>}
      </ul>
    </div>
  );
};

export default SearchWithDebounce;
