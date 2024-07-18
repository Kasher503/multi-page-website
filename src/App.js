import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import About from './component/about';
import Services from './component/services';
import Portfolio from './component/portfolio';
import Pricing from './component/pricing';
import Home from './component/home';
import Contact from './component/contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
