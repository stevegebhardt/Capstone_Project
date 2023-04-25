import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [catFact, setCatFact] = useState([]);
  const [showFact, setShowFact] = useState(true);

  const getCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      console.log(response);
      setCatFact(response.data.fact);
    });
  };

  useEffect(() => {
    getCatFact();
  }, []);

  const toggle = () => {
    setShowFact(!showFact);
  };

  return (
    <>
      <div className="mainBody">
        <section className="catFace">
          <div className="cat">
            <div className="ear left-ear"></div>
            <div className="ear right-ear"></div>
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
            <div className="page6"></div>
            <div className="page5"></div>
            <div className="page4"></div>
            <div className="page3"></div>
            <div className="page2"></div>
            <div className="page1"></div>
            <div className="front">
              <div className="bookTitle">
                The Truth About Cats, or So You Thought
              </div>
            </div>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    </>
  );
}

export default App;
