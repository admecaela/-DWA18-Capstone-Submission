import React, { useState, useEffect } from 'react';
import fetchPodcastData from '../data';
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
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchPodcastData();
      setPodcasts(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching podcast data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Welcome to MecaFunk Podcast App</h1>
      {loading ? <div>Loading...</div> : null}
      {podcasts.length > 0 ? (
        <div>
          <h2>{podcasts[0].title}</h2>
          <p>{podcasts[0].summary}</p>
        </div>
      ) : (
        <div>No podcasts fetched.</div>
      )}
      <button onClick={fetchData}>Load Podcast</button>
      
      <Navbar />
      <Filter />
      <Socials />
      <Footer />
      <DropDowndiaList />
      <SearchPanel />
      <GenreSorted />
      <Home />
      <fetchPodcastData />
    </div>
  );
}

export default App