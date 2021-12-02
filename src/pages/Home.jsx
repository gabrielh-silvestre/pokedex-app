import React from 'react';
import Pokedex from '../components/Pokedex';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Pokedex />
    </main>
  );
}
