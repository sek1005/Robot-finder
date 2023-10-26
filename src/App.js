import React from 'react';
import { useEffect,useState } from "react";
/** Import de la donnée */
import './App.css';
import RobotCard from "./components/RobotCard";

// import Robots from './data/data';

function App() {
  const [robots, setRobots] = useState([]);
  const [valueResearch, setValueResearch] = useState("");
  useEffect(() => {
    fetch("https://wild.creativebrain.fr/robots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRobots(data);
      });
  }, []);
  const resultValueResearch = robots.filter((robot) => robot.name.toLowerCase().includes(valueResearch.toLowerCase()));

console.log(resultValueResearch);

  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div>
        <label for="site-search">Rechercher: </label>
        <input
          type="search"
          placeholder='Rechercher'
          id="site-search"
          value={valueResearch}
          onChange={(event) => setValueResearch(event.target.value)}
        />
        {/* <button>Search</button> */}
      </div>
      <div>
        {valueResearch ? (
          <>
            {resultValueResearch.map((robot,index) => {
              return (
                <RobotCard
                  key={index}
                  id={robot.id}
                  name={robot.name}
                  username={robot.username}
                  email={robot.email}
                  phone={robot.phone}
                  website={robot.website}
                  address={robot.address}
                />
              );
            })}
          </>
        ) : (
          <>
            {robots.map((robot,index) => {
              return (
                <RobotCard
                  key={index}
                  id={robot.id}
                  name={robot.name}
                  username={robot.username}
                  email={robot.email}
                  phone={robot.phone}
                  website={robot.website}
                  address={robot.address}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
