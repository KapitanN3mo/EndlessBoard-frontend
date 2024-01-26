import React from 'react'
import './App.css'
import AdCard from './components/adCard.js';

function App() {
  return (
    <div>
      <AdCard
      imgLink={"https://jjji.ru/1920x1280"}
      adTitle={"This is Title"}
      adText={"This is some text, yeeeee baby"}
      />
    </div>
  );
}

export default App;