import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login.jsx";
import Personal from "./components/Personal";
import Professional from "./components/Professional";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Publications from "./components/Publications";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<Login />}></Route>
          <Route exact path = "/personal" element = {<Personal />}></Route>
          <Route exact path = "/professional" element = {<Professional />}></Route>
          <Route exact path = "/education" element = {<Education />}></Route>
          <Route exact path = "/awards" element = {<Awards />}></Route>
          <Route exact path = "/publications" element = {<Publications />}></Route>
        </Routes>
     </div>
    </Router>
    
  );
}

export default App;
