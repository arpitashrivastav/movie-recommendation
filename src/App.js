import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  Thrillers: [
    {
      name: "Parasite",
      description:
        "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
      imdbRating: "8.6/10"
    },
    {
      name: "Andhadhun",
      description:
        "Akash, a piano player pretending to be visually-impaired, unwittingly becomes entangled in a number of problems as he witnesses the murder of a former film actor.",
      imdbRating: "8.3/10"
    },
    {
      name: "Coherence",
      description:
        "Eight friends at a dinner party experience a troubling chain of events due to the malevolent influence of a passing comet.",
      imdbRating: "7.2/10"
    }
  ],

  ScienceFiction: [
    {
      name: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      imdbRating: "8.6/10"
    },
    {
      name: "The Martian",
      description:
        "Mark Watney is stranded on the planet of Mars after his crew leaves him behind, presuming him to be dead due to a storm. With minimum supplies, Mark struggles to keep himself alive.",
      imdbRating: "8/10"
    },
    {
      name: "Gravity",
      description:
        "On an outer space mission, Dr Ryan Stone, an engineer, and Matt Kowalski, an astronaut, are hit by high-speed space debris. As the situation gets dire, Stone, the lone survivor, rises to the occasion.",
      imdbRating: "7.7/10"
    }
  ],
  Horror: [
    {
      name: "The Shining",
      description:
        "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
      imdbRating: "8.4/10"
    },
    {
      name: "Get Out",
      description:
        "Chris, an African-American man, decides to visit his Caucasian girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead.",
      imdbRating: "7.7/10"
    },
    {
      name: "The Conjuring",
      description:
        "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles upon a dazed and bloodied young man walking down the road. Accused of murder, the suspect claims demonic possession as his defense, forcing the Warrens into a supernatural inquiry unlike anything they've ever seen before.",
      imdbRating: "7.5/10"
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
      <div className="btn-container">
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className={genre === selectedGenre && selectedMovie}
          >
            {genre}
          </button>
        ))}
      </div>

      <ul>
        {movies[selectedGenre].map((movie) => (
          <li key={movie.name}>
            <div className="lg"> {movie.name} </div>
            <div className="xs"> {movie.imdbRating} </div>
            <div className="sm mx-1"> {movie.description} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
