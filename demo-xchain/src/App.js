import React,{useState} from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserBoard from './components/User'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import ProductList from './pages/ProductList';

const App = () => {
  const [themeMode,setThememode] = useState("dark-mode")
  // "site-container"
 
  return (
    <div className={`site-container ${themeMode === "light-mode" ? "light-mode" : "dark-mode"}`}>
      <BrowserRouter>

        <Sidebar>
          <div className="user_board">
            <UserBoard setThememode={setThememode}/>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/productList" element={<ProductList />} />
          </Routes>

        </Sidebar>

      </BrowserRouter>
    </div>

  );
};

export default App;