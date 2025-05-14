import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoEditor from './pages/TodoEditor/TodoEditor';
import TodoUse from './pages/TodoUse/TodoUse';
import Home from './pages/Home/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoEditor />} />
        <Route path="/todo/use/:id" element={<TodoUse />} />
        <Route path="/todo" element={<TodoEditor />} /> {/* opcional, para criar novo */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
