import { useEffect, useState } from "react";
import "./App.css";

import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

    setMovieReviewList([
      ...movieReviewList,
      {
        movieName: movieName,
        movieReview: review,
        id: 0,
      },
    ]);

    setMovieName("");
    setReview("");
  };

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

  const updateReview = (movie) => {
    Axios.put("http://localhost:3001/api/update", {
      movieName: movie,
      movieReview: newReview,
    });

    setNewReview("");
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <br />
        <label>Review:</label>
        <input
          type="text"
          name="review"
          placeholder="Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <br />
        <button onClick={submitReview}>Submit</button>

        {movieReviewList.map((val) => (
          <div key={val.id} className="review-list">
            <h3>Movie Name : {val.movieName}</h3>
            <h3>Movie Name : {val.movieReview}</h3>
            <button
              className="delete-btn"
              onClick={() => {
                deleteReview(val.movieName);
              }}
            >
              Delete
            </button>
            <div>
              <input
                type="text"
                style={{ width: "50%" }}
                onChange={(e) => {
                  setNewReview(e.target.value);
                }}
              />
              <button
                className="update-btn"
                onClick={() => {
                  updateReview(val.movieName);
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
