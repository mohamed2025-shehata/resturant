/*mport React from 'react';
import { BrowserRouter as Router ,Routes ,Route ,Link  } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import Order from './Order';
import Services from './Services';
import Menu from './Menu';
import './App.css';


function App(){
  return(
    <Router>
   <div>
    <nav>
      <ul>
        
           <li>
            <Link to="/Home">الرئيسيه</Link>
           </li>
           <li>
            <Link to="/services"> خدماتنا</Link>
           </li>
           <li>
            <Link to="/menu">اصناف الطعام</Link>
           </li>
           <li>
            <Link to="/order"> طلب وجبه</Link>
           </li>
           <li>
            <Link to="/contactus">تواصل معنا</Link>
           </li>
      </ul>
    </nav>
<Routes>

<Route path='/' element={<Home/>} />
<Route path ='/Home' element={<Home/>} />
<Route path='/Services' element={<Services/>} />
<Route path='/Menu' element={<Menu/>} />
<Route path='/Order' element ={<Order/>} />
<Route path='/ContactUs' element={<ContactUs/>} />





</Routes>


</div>


</Router>
  )
}
export default App;   */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import Order from './Order';
import Services from './Services';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">الرئيسية</Link>
            </li>
            <li>
              <Link to="/services">خدماتنا</Link>
            </li>
            <li>
              <Link to="/menu">أصناف الطعام</Link>
            </li>
            <li>
              <Link to="/order">طلب وجبة</Link>
            </li>
            <li>
              <Link to="/contactus">تواصل معنا</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


