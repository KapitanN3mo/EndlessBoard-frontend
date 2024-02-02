import React from 'react'
import './App.css'
import Registration from './components/registration';
import Header from './components/Header.js';
import AdCard from './components/adCard';

function App() {
  return (
    <div>
      <Header isLoggedIn={true}/>
      <AdCard 
      imgLink={"https://petstime.ru/wp-content/uploads/2023/04/word-image-13637-27.jpeg"}
      adTitle={"This is Title"}
      adText={"This is some text, yeeeeeeeeee baby!"}
      />
    </div>
  );
}

export default App;