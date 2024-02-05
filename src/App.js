import React from 'react'
import './App.css'
import Registration from './components/registration';
import Header from './components/Header.js';
import AdCard from './components/adCard';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div>
      <Header isLoggedIn={true} />

      <Grid container justifyContent="center" spacing={5} marginTop={1}>

      </Grid>

    </div>
  );
}

export default App;