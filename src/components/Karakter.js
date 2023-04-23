import { useState, useEffect } from "react";
import axios from "axios";
import Filmler from "./Filmler";
import Accordeon from "./Accordeon";

function Karakter() {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const charPromise = axios("https://swapi.dev/api/people/");

    const filmsPromise = axios("https://swapi.dev/api/films/");

    Promise.all([charPromise, filmsPromise]).then((values) => {
      console.log(values);
      setCharacters(values[0].data);
      setFilms(values[1].data[0].results);
    });
  }, []);

  return (
    <div>
      {characters.map((char, i) => {
        return (
          <Accordeon key={`char-${i}`} title={char.name}>
            <p>
              <span>Gender:</span>
              {char.gender}
            </p>
            <p>
              <span>Height:</span> {char.height}
            </p>
            <p>
              <span>Mass:</span> {char.mass}
            </p>
            <p>
              <span>Birth Year:</span> {char.birth_year}
            </p>
            <p>
              <span>Eye Color:</span> {char.eye_color}
            </p>
            <p>
              <span>Skin Color:</span> {char.hair_color}
            </p>
            <p>
              <span>Hair Color:</span> {char.skin_color}
            </p>
            <p>
              <span>Appears in:</span>
            </p>
            <Filmler char={char} i={i} films={films} />;
          </Accordeon>
        );
      })}
    </div>
  );
}

export default Karakter;
