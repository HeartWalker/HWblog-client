import React, {Component} from 'react';
const NoMatch = ({ location }) => (
    <div>
        <h2>404</h2>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

export default NoMatch;