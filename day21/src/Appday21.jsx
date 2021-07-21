import React, { useState , useEffect} from "react";
import './Styleday21.css';
import Card from "./component/Thaday21";


const Anime = ({index, anime, setAnime, animes}) => {
  return(
    <div className="main">
      {anime}
      <button onClick={() => {
            console.log("Delete = " , anime);
            const newAnime = animes.filter((el,i) => i !== index);
            setAnime(newAnime);
      }}>Delete</button>
    </div>
  );
};

function App(props) {
  const [value, setValue] = useState([]);
  const [num, setNum] = useState([]);
  const [animes, setAnime] = useState([]);

  return (
    <div className="App">
      <div className="inputs">
      <input placeholder="Anime name" type="text" onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      />
      <input placeholder="Episodes" type="number" onChange={(e) => {
        setNum(e.target.value);
      }}
      num={num}
      />
      </div>
      <button onClick={() => {
        setAnime([...animes, <Card tittle={value} anime={num}/>]);
        setValue("");
        setNum("");
      }}
      >Add Item</button>
      {
        animes.map((anime,index)=>(
          <Anime key={index} anime={anime} animes={animes} setAnime={setAnime} index={index}/>
        ))
      }

    </div>
  );
}

export default App;