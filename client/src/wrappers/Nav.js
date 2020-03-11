import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {

  return (
    <nav className="half">
      <ul className="App-nav">
        <li className="App-nav-link">
          <Link to="/" className="App-link">Home</Link>
        </li>
        <li className="App-nav-link">
          <Link to="/museums" className="App-link">Museums</Link>
        </li>
        <li className="App-nav-link">
          <Link to="/pieces" className="App-link">Art Pieces</Link>
        </li>
      </ul>
    </nav>
  )
}