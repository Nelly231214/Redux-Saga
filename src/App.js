import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Menu from './components/Menu'
import Nelly from './pages/Nelly/Nelly'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/nelly' element={<Nelly />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;