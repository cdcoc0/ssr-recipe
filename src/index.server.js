import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Helo SErver Side Rendering😁</div>
);

console.log(html);