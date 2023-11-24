import React, { useState, useEffect } from 'react';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetching shows from the API endpoint
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
        })
        .then(showData => {
        console.log('Show data:', showData);
        setShows(showData);
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });
    })

  return (
    <div className="home-container">
      <h1>Podcast App</h1>
      <div className="shows-grid">
        {shows.map(show => (
          <div key={show.id} className="show-card">
            <img src={show.previewImage} alt={show.title} />
            <h2>{show.title}</h2>
            <p>Seasons: {show.seasonsCount}</p>
            {/* Other show details and interactions */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;