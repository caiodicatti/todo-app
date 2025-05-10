import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './components/TodoApp/TodoApp';
import Home from './pages/Home/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoApp />} />
        <Route path="/todo" element={<TodoApp />} /> {/* opcional, para criar novo */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
