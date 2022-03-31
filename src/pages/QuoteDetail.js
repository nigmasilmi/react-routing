import React, { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        {' '}
        <LoadingSpinner />{' '}
      </div>
    );
  }

  if (error) {
    return <div className="centered"> {error} </div>;
  }

  if (!loadedQuote.text) {
    return (
      <div className="centered">
        <p>No quote found</p>
      </div>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
