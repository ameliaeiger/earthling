export const fetchNASAData = (startDate, endDate) => {
    if (!endDate){
      return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`).catch(error => alert("Something went wrong. Please try again."))
    } else {
    return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`).catch(error => alert("Something went worng. Please try again."))
      .then(response => response.json())
    }
  }

export const fetchAPOD = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=CQVz4qc29PYDruOh6NPKRzNMtIIYdLMZM589ut8w`).catch(error => alert("Something went wrong. Please try again."))
      .then(response => response.json())
  }