import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './ComponenTs/Header';
import { Fragment } from 'react';
import Home from './Pages/Home';
import {  Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
function App() {
  return (
    <Fragment>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Register />

  </Fragment>
  );
}

export default App;
