import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from "./Nav/Navigation"
import Home from "./Home/Home"
import Auth from "./Auth/Auth"
import PTOT from "./PTOT/PTOT"
import APOS from "./APOS/APOS"
import Other from "./Other/Other"
// import axios from "axios"
// import { useState, useEffect } from "react"



function App() {

// const [pdf, setPdf] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:3004/PTOT")
//   .then((response) => {
//     console.log(response.data)
//   setPdf(response.data);
//   });
//   }, []);

  // console.log(pdf);

  return (
    <div className="App bg-dark w-full h-screen">
<Navigation />

{/* install react pdf and make layout before beginning to code  */}
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Auth" element={<Auth />} />

              <Route path="/PTOT" element={<PTOT />} />

              <Route path="/APOS" element={<APOS />} />

              <Route path="/Other" element={<Other />} />

            </Routes>

    </div>
  );
}

export default App;
