import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './components/TodoApp/TodoApp';
import Home from './pages/Home';
import './App.css'

function App() {


  return (
    <BrowserRouter basename="/todo-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoApp />} />
        <Route path="/todo" element={<TodoApp />} /> {/* opcional, para criar novo */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
