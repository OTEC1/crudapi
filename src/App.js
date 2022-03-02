import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigators from './Components/Navigators';
import Add from './Components/Add';
import Update from './Components/Update';
import Get from './Components/Get';
import Delete from './Components/Delete';

function App() {
  return (
    <div className="App">
        <Router>

            <Routes>
              <Route  path="/"  element={<Navigators/>} />
            </Routes>


            <Routes>
              <Route  path="/add"  element={<Navigators/>} />
            </Routes>
            <Routes>
              <Route  path="/add"  element={<Add/>} />
            </Routes>




            <Routes>
              <Route  path="/update"  element={<Navigators/>} />
            </Routes>
            <Routes>
              <Route  path="/update"  element={<Update/>} />
            </Routes>




            <Routes>
              <Route  path="/get"  element={<Navigators/>} />
            </Routes>
            <Routes>
              <Route  path="/get"  element={<Get/>} />
            </Routes>



            <Routes>
              <Route  path="/delete"  element={<Navigators/>} />
            </Routes>
            <Routes>
              <Route  path="/delete"  element={<Delete/>} />
            </Routes>

        </Router>
    </div>
  );
}

export default App;
