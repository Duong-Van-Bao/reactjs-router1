import React from 'react';
import './../css/App.css';
import Nav from './Nav.js';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import { BrowserRouter as Router } from 'react-router-dom';

// phải import thư viện react import { BrowserRouter as Router } from 'react-router-dom'; và để thể router bọc lấy thẻ div 
// sự khác nhau của ./ và ../ là ../ ở là thoái ra ngoài một folder và ./ tìm file ở vị trí bên cạnh  
// xem lại kỉ video

function App() {
  return (
    <Router>
      <div>  
            <Nav/>
            {/* <Home/> */}
            {/* <News/> */}
            {/* <NewsDegil/> */}
            {/* <Contact/> */}
            <DieuHuongURL/>
            <Footer/>
      </div>
    </Router>
  );
}

export default App;
