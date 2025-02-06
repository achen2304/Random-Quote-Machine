import { useState, useEffect } from 'react';
import './App.css';

import { randomQuote } from 'quotegarden';

function App() {
  const [quote, setQuote] = useState(''); // State to store the quote

  useEffect(() => {
    randomQuote() // Fetch a random quote
      .then((quoteData) => {
        const quoteText = quoteData[0].quote; // Extract quote from the response
        setQuote(quoteText); // Update the state with the quote
      })
      .catch((error) => {
        console.log('Error fetching quote:', error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <div className="container">
        <header>{quote ? quote : 'Loading quote...'}</header>
        <div className="quote-box"></div>
      </div>
    </>
  );
}

export default App;
