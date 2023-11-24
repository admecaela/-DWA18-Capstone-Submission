// Function to fetch and display show details
function fetchShowData() {
    const showId = 123; // Replace with the ID of the show you want to fetch
    const apiUrl = `https://api.example.com/shows/${showId}`; // Replace with the actual API endpoint
  
    const loadingElement = document.getElementById('loading');
    const showInfoElement = document.getElementById('show-info');
  
    loadingElement.style.display = 'block';
    showInfoElement.style.display = 'none';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(showData => {
        // Access different properties of the showData and update HTML elements
        const showTitleElement = document.getElementById('show-title');
        const showSummaryElement = document.getElementById('show-summary');
  
        showTitleElement.textContent = showData.name; // Assuming 'name' is the title property
        showSummaryElement.textContent = showData.summary; // Assuming 'summary' is a property
  
        loadingElement.style.display = 'none';
        showInfoElement.style.display = 'block';

        // You can update other HTML elements with additional show details
      })
      .catch(error => {
        console.error('Fetch error:', error);
        // Handle errors or display a message to the user
      });
  }

  // Function to load new show data when the button is clicked
function loadNewShowData() {
    const newShowId = 456; // Replace with the ID of the new show
    const apiUrl = `https://api.example.com/shows/${newShowId}`; // Replace with the actual API endpoint for new show
  
    const loadingElement = document.getElementById('loading');
    const showInfoElement = document.getElementById('show-info');
  
    loadingElement.style.display = 'block';
    showInfoElement.style.display = 'none';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(showData => {
        const showTitleElement = document.getElementById('show-title');
        const showSummaryElement = document.getElementById('show-summary');
  
        showTitleElement.textContent = showData.name; // Assuming 'name' is the title property
        showSummaryElement.textContent = showData.summary; // Assuming 'summary' is a property
  
        loadingElement.style.display = 'none';
        showInfoElement.style.display = 'block';
      })
      .catch(error => {
        console.error('Fetch error:', error);
        // Handle errors or display a message to the user
      });
  }
  
  // Event listener for the button click to load new show data
  const loadNewDataButton = document.getElementById('load-new-data');
  loadNewDataButton.addEventListener('click', loadNewShowData);
  
  // Call the function to fetch show data when the page loads
  window.onload = fetchShowData;
  