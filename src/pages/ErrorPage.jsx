import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Oops!</h1>
      <p>An unexpected error has occurred!</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </>
  );
}
