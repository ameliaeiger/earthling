export const fetchNASAData = (startDate, endDate) => {
    // return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`)
    return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`)
      .then(response => response.json())
  }

export const fetchAPOD = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => response.json())
  }