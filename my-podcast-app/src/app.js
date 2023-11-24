import React from 'react';
import '../src/styles.css'
import Navbar from '../src/components/Navbar.js'
import Filter from '../src/components/Filter.js'
import Footer from '../src/components/Footer.js'
import Socials from './components/Socials.js'
import DropDowndiaList from './components/DropDownList.js'
import SearchPanel from './components/SearchPanel.js';
import GenreSorted from './components/GenreSorted.js';
import Home from './components/Home.js'

function App() {
  return (
    <div>
      <h1>Welcome to MecaFunk Podcast App</h1>
      <Navbar />
      <Filter />
      <Socials />
      <Footer />
      <DropDowndiaList />
      <SearchPanel />
      <GenreSorted />
      <Home />
    </div>
  );
}

export default App