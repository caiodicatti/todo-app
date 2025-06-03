import { HashRouter, Routes, Route } from 'react-router-dom';
import TodoEditor from './pages/TodoEditor/TodoEditor';
import TodoUse from './pages/TodoUse/TodoUse';
import Home from './pages/Home/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoEditor />} />
        <Route path="/todo/use/:id" element={<TodoUse />} />
        <Route path="/todo" element={<TodoEditor />} />
      </Routes>
    </HashRouter >
  )
}

export default App
