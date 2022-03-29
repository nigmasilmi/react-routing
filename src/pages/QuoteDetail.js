import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((qt) => qt.id.toString() === params.quoteId);
  if (!quote) {
    return <p>Not quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
