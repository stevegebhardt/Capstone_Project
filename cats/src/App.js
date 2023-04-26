import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [catFact, setCatFact] = useState([]);
  const [catBreed, setCatBreed] = useState([]);
  const [showFact, setShowFact] = useState(true);

  const getCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      console.log(response);
      setCatFact(response.data.fact);
    });
  };
  const getCatBreed = () => {
    axios.get("https://catfact.ninja/breeds?limit=11").then((response) => {
      console.log(response);
      setCatBreed(response.data.data);
    });
  };

  useEffect(() => {
    getCatFact();
    getCatBreed();
  }, []);

  const toggle = () => {
    setShowFact(!showFact);
  };

  return (
    <>
      <div className="mainBody">
        <section className="catFace">
          <div className="cat">
            <div className="ear left-ear">
              <div className="left-ear-inner">
                <div className="left-orb"></div>
              </div>
            </div>
            <div className="ear right-ear">
              <div className="right-ear-inner">
                <div className="right-orb"></div>
              </div>
            </div>
            <div className="face">
              <div className="eye left-eye">
                <div className="pupil"></div>
              </div>
              <div className="eye right-eye">
                <div className="pupil"></div>
              </div>
              <div className="muzzle"></div>
              <div className="tongue"></div>
            </div>
          </div>
        </section>
        <section className="factsSection">
          <div className="book">
            <div className="back"></div>
            <div className="page12"></div>
            <div className="page11"></div>
            <div className="page10"></div>
            <div className="page9"></div>
            <div className="page8"></div>
            <div className="page7">
              <div>
                <button className="getFact" onClick={toggle}>
                  Want to Learn More?
                </button>
              </div>
              <div className="fact">{showFact ? null : <p>{catFact}</p>}</div>
              <div>
                <button className="newFact" onClick={getCatFact}>
                  How About Something Different?
                </button>
              </div>
            </div>
            <div className="page6">
              <div className="page-container">
                <p className="left-page">Here are some different cat breeds:</p>
                <div className="breeds">
                  {catBreed.map((breed) => {
                    console.log(breed);
                    return <p className="left-page names">{breed.breed}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className="page5"></div>
            <div className="page4"></div>
            <div className="page3"></div>
            <div className="page2"></div>
            <div className="page1"></div>
            <div className="front">
              <div className="bookTitle">
                The Truth About Cats, or So You Thought
              </div>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="pages"></div>
            </div>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    </>
  );
}

export default App;
