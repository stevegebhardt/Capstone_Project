import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [catFact, setCatFact] = useState([]);
  const [showFact, setShowFact] = useState(true);

  const getCatFacts = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      console.log(response);
      setCatFact(response.data.fact);
    });
  };

  useEffect(() => {
    getCatFacts();
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
            </div>
          </div>
        </section>
        <section className="facts">
          <div className="fileCabinet">
            <div className="drawer">
              <button onClick={toggle}></button>
            </div>
            <div className="openDrawer">
              {showFact ? null : <p>{catFact}</p>}
            </div>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    </>
  );
}

export default App;
