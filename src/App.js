import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  Thrillers: [
    { name: "Parasite", rating: "8.6/10" },
    { name: "Andhadhun", rating: "8.3/10" },
    { name: "The Invisible Man", rating: "7.1/10" }
  ],

  ScienceFiction: [
    {
      name: "Interstellar",
      rating: "8.6/10"
    },
    {
      name: "The Martian",
      rating: "8/10"
    },
    {
      name: "Gravity",
      rating: "7.7/10"
    }
  ],
  Comedy: [
    {
      name: "The Wolf of the Wall Street",
      rating: "8.2/10"
    },
    {
      name: "The Hangover",
      rating: "7.7/10"
    },
    {
      name: "21 Jump Street",
      rating: "7.2/10"
    }
  ],
  Horror: [
    {
      name: "The Shining",
      rating: "8.4/10"
    },
    {
      name: "Get Out",
      rating: "7.7/10"
    },
    {
      name: "The Conjuring",
      rating: "7.5/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Thrillers");
  const [selectedMovie] = useState("selected");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Movie Recommendation</h1>
      <h4>Checkout my favorite movies.Select a Genre to get Started</h4>
      <div>
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            className={genre === selectedGenre && selectedMovie}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }} className="container container-center">
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                color: "white",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "#4E4E50"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
