import "../css/style.css";
import logo from "../img/icon.png";
import axios from "axios";
import Definition from "./Definition";
import { useState } from "react";
function App() {
  let [definitions, setDefinitions] = useState({});
  let [status, setStatus] = useState(0);
  // let loadingScreen = document.querySelector(".loading");

  const getDefinition = (e) => {
    e.preventDefault();
    let url = "";
    let word = document.querySelector(".word");
    let pronunciation = document.querySelector(".pronunciation");
    document.querySelector(".loading").style.opacity = 1;
    let query = document.querySelector(".input").value;
    if (!query) url = "https://owlbot.info/api/v3/dictionary/error";
    else url = `https://owlbot.info/api/v3/dictionary/${query}`;

    axios({
      method: "get",
      url: url,
      headers: {
        Authorization: "Token 38c64d8ec14da85071597eb847dfdee41559e5e2",
      },
    })
      .then(function (res) {
        setStatus(200);
        setStatus((status) => {
          console.log(status);
          return status;
        });
        document.querySelector(".loading").style.opacity = 0;
        setDefinitions(res.data.definitions);
        setDefinitions((definitions) => {
          console.log(definitions);
          return definitions;
        });
        word.textContent = res.data.word;
        pronunciation.textContent = res.data.pronunciation;
      })
      .catch(function (err) {
        console.log(err.response);
        setStatus(404);
        setStatus((status) => {
          console.log(status);
          return status;
        });
        setDefinitions({
          definition: {
            num: 1,
            type: "noun",
            definition: "a mistake.",
            sample: "you have made an error in the query",
          },
        });
        document.querySelector(".loading").style.opacity = 0;
      })
      .then(function () {
        console.log(status);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Dictionary</h1>
        </div>
        <form type="" className="search" onSubmit={getDefinition}>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" className="input" placeholder="Enter a word" />
          </div>
        </form>
      </div>
      <div className="loading">
        <p className="text">Searching</p>
      </div>
      <div className="definitions">
        <h1 className="word">Welcome</h1>
        <h2 className="pronunciation">ˈwelkəm</h2>
        {definitions.length > 0 ? (
          definitions.map((definition) => {
            return <Definition definition={definition} />;
          })
        ) : (
          <Definition />
        )}
      </div>
    </div>
  );
}

export default App;
