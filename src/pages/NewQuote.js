import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQoutehandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQoutehandler} />;
};

export default NewQuote;
