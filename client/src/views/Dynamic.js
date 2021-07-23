import React from 'react';

const View = (props) => {
  return (
    <>
      <h1>This is a dynamic page</h1>
      <h2>x {props.title} x</h2>
      <h3>{props.id}</h3>
      <hr />
      <h4>Location</h4>
      <pre>{JSON.stringify(props.location, null, 2)}</pre>
      <h4>Match</h4>
      <pre>{JSON.stringify(props.match, null, 2)}</pre>
      <h4>Config</h4>
      <pre>{JSON.stringify(props.config, null, 2)}</pre>
      <h4>Data</h4>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </>
  );
}

export default View;
