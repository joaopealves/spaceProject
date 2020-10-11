import React from 'react';
import NavBar from '../../components/navbar/navbar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="getStartedContainer">
        <p>Discover the solar system in a way you've never seen.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
