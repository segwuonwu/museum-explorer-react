import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Museums from './pages/museums/Museums';
import NewMuseum from './pages/museums/NewMuseum';
import ShowMuseum from './pages/museums/ShowMuseum';
import Pieces from './pages/pieces/Pieces';
import NewPiece from './pages/pieces/NewPiece';
import ShowPiece from './pages/pieces/ShowPiece';

export default function Content(props) { 
  
  return (
    <div className="App-content">
      <Route exact path="/" component={Home} />
      <Route path="/museums" render={Museums} />
      <Route path="/museums/add" render={NewMuseum} />
      <Route path="/museums/:id" render={ShowMuseum} />
      <Route path="/pieces" render={Pieces} />
      <Route path="/pieces/add" render={NewPiece} />
      <Route path="/pieces/:id" render={ShowPiece} />
    </div>
  )
}