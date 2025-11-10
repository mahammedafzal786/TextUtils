import { useState } from 'react';
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const toggleMode= ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
      document.title = 'TextUtils - Ligt Mode';
    }else{
       setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
