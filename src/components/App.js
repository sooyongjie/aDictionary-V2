import "../css/style.css";
import logo from "../img/icon.png";
import axios from "axios";
import Definition from "./Definition";
import { useState } from "react";
function App() {
  let [definitions, setDefinitions] = useState({});
  let word = document.querySelector(".word");
  let pronunciation = document.querySelector(".pronunciation");
  // let loadingScreen = document.querySelector(".loading");

  const errorMessage = () => {
    word.textContent = "error";
    pronunciation.textContent = "ˈerər";
    document.querySelector(".type").textContent = "noun.";
    document.querySelector(".definition").textContent = "a mistake.";
    document.querySelector(".example").textContent =
      "you have made an error in the query";
  };

  const getDefinition = (e) => {
    e.preventDefault();
    let url = "";
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
        document.querySelector(".loading").style.opacity = 0;
        setDefinitions(res.data.definitions);
        word.textContent = res.data.word;
        pronunciation.textContent = res.data.pronunciation;
      })
      .catch(function (err) {
        console.log(err.response);
        errorMessage();
        document.querySelector(".loading").style.opacity = 0;
      });
    // .then(function () {});
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

// setDefinitions((definitions) => {
//   console.log(definitions);
//   return definitions;
// });
