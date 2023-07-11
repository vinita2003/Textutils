import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';

import Alert from './components/Alert';

import TextForm from './components/TextForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  


  const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#065d81';
     showAlert("dark mode was enabled","success")
     document.title = "Textutils-darkMode";
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode was enabled","success")
      document.title = "Textutils-lightMode";
    }
  }

  
  
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  return (
     
     <>
     <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
</>
   
  );
}

export default App;
