import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
