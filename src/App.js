import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/Header';
import Second from './componets/Second';
import { Route, Routes } from 'react-router-dom';
import Footer from './componets/Footer';
import Third from './componets/Third';
import Four from './componets/Four';
import Five from './componets/Five';
import Six from './componets/Six';
import Seven from './componets/Seven';
import Eight from './componets/Eight';
import Nine from './componets/Nine';
import Ten from './componets/Ten';
import Eleven from './componets/Eleven';
import Parent from './Parent';

function App() {
  return (
    <>  

      

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/ten" element={<Ten />} />
        <Route path="/eleven" element={<Eleven />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Header />
      <Second />
      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <Eleven />
      <Footer />

      <Parent/>



    </>
  );
}

export default App;
