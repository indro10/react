import React from "react";
import ReactDOM from 'react-dom/client'
const ReactElement=React.createElement('h1',{id:"Initial Component"},"This is the content" );
const RootElement=ReactDOM.createRoot(document.getElementById('root'));
RootElement.render(ReactElement);