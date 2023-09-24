import Home from './pages/Home.js';
import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import About from './pages/About.js';
import Counter from './pages/Counter.js';
import Input from './pages/Input.js';
import Input2 from './pages/Input2.js';
import List from './pages/List.js';


function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">홈</Link> | 
      <Link to="/About">어바웃</Link> |
      <Link to="/Counter">카운터</Link> |
      <Link to="/Input">인풋</Link> |
      <Link to="/Input2">인풋2</Link> |
      <Link to="/List">리스트</Link> |
      {/* < a href = "/">홈</a>이랑 비슷한거 */}
      

      </nav>
      {/* 링크 클릭하면 아래 링크로 연결 */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/Input" element={<Input/>}/>
        <Route path="/Input2" element={<Input2/>}/>
        <Route path="/List" element={<List/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
