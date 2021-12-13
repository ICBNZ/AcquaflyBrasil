import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.scss';
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

class App extends React.Component {

  render() {
    return (
      <>
      <div className="App">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
          </Routes>
      </div>
      </>
    );
  }
}

export default App;
