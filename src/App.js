import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from "./Nav/Navigation"
import Home from "./Home/Home"
import Auth from "./Auth/Auth"
import AuthPDF from "./Auth/AuthPDF"
import PTOT from "./PTOT/PTOT"
import PTOTPDF from "./PTOT/PTOTPDF"
import APOS from "./APOS/APOS"
import APOSPDF from "./APOS/APOSPDF"
import Other from "./Other/Other"
import OtherPDF from "./Other/OtherPDF"



function App() {
  return (
    <div className="App bg-dark w-full h-screen">
<Navigation />

{/* install react pdf and make layout before beginning to code  */}
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>

              <Route path="/Auth" element={<Auth />}>
                <Route path="/Auth/:AuthId" element={<AuthPDF/>}/>
              </Route>

              <Route path="/PTOT" element={<PTOT />}>
                <Route path="/PTOT/:PTOTId" element={<PTOTPDF/>}/>
              </Route>

              <Route path="/APOS" element={<APOS />}>
                <Route path="/APOS/:APOSId" element={<APOSPDF/>}/>
              </Route>

              <Route path="/Other" element={<Other />}>
                <Route path="/Other/:OtherId" element={<OtherPDF/>}/>
              </Route>

            </Routes>

    </div>
  );
}

export default App;
