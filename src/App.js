import React, { useState } from 'react'
import './App.css'
import Registration from './components/registration';
import Header from './components/Header.js';
import AdCard from './components/adCard';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import servIp from './serverConfigData';

function App() {

const [showPosts,setShowPosts] = useState ([]);
const [offset,setOffset] = useState(0);              // переменная для смещения подгрузки новых постов
document.addEventListener("scroll",scrollListener);

  useEffect(() => {  // то что должно сделаться при первом запуске так как указано []
    
    let url = new URL("posts","http://192.168.90.205");  // конструктор URL адресов
    console.log(`Request! Offset ${offset}`)
    url.searchParams.set('offset',offset);
    let xhrFirstReq = new XMLHttpRequest();
    xhrFirstReq.open('GET',url);
    xhrFirstReq.setRequestHeader("Content-Type","application/json")
    xhrFirstReq.responseType = 'json';  
    xhrFirstReq.send();
    xhrFirstReq.onreadystatechange = function (){     // если не пашет выводить в консоль console.log
      if (xhrFirstReq.readyState != 4) return;
      let responseFirst = xhrFirstReq.response;
      setShowPosts([...showPosts, ...responseFirst]);  
    }
  }, [offset]);

function scrollListener(e){
  console.log(`Sroll detected! ${window.scrollY+2} ${document.body.offsetHeight - window.innerHeight}`)
  if(window.scrollY + 2 > document.body.offsetHeight - window.innerHeight){
    setOffset(offset+25)
  }
}
  const showingPosts = showPosts.map((post) => <Grid item key={post.id}><AdCard adTitle={post.name} adText={post.text} key={post.id}></AdCard></Grid>); // id обязательно надо для reacta
  return (
    <div>
      <Header isLoggedIn={true} />
      <Grid   container justifyContent="center" spacing={5} marginTop={1}>
        {showingPosts}
      </Grid>

    </div>
  );
}

export default App;