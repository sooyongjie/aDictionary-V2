import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "https://owlbot.info/api/v3/dictionary/apple",
    headers: {
      Authorization: "Token 38c64d8ec14da85071597eb847dfdee41559e5e2",
    },
  })
    .then(function (res) {
      // handle success
      console.log(res.data);
    })
    .catch(function (err) {
      // handle error
      console.log(err.response);
    })
    .then(function () {
      // always executed
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
