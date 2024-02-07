import "../App.css";
import { data } from "../data";
import Navbar from "./Navbar";
import React from "react";
import Moviecard from "./Moviecard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {data.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
