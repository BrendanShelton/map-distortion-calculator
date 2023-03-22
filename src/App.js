import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Portfolio from './components/portfolio';

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <Portfolio />
  );
}
