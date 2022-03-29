import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  {
    id: 1,
    author: 'Paul McCartney',
    text: "We can work it out. Life is very short, and there's no time for fussing and fighting, my friend.",
  },
  {
    id: 2,
    author: 'Juliana Romano',
    text: 'Why was it always up to her when I was her best friend and when I was just a stranger?',
  },
  {
    id: 3,
    author: 'William Landay',
    text: "The interior of a teenager's mind is an endless war between Stupid and Clever. ",
  },
  {
    id: 4,
    author: 'David Wong',
    text: 'Son, the greatest trick the Devil pulled was convincing the world there was only one of him.',
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
