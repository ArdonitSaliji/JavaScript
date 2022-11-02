import Header from './components/Navbar'
import Main from './components/Main'
import Location from './components/Location'
import Home from './components/Home'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Routes>
        <Route path='restaurant-react/' element={<Home />} />
        <Route path='restaurant-react/menu' element={<Main />} />
        <Route path='restaurant-react/location' element={<Location />} />
        <Route path='restaurant-react/contact' element={<Contact />} />
      </Routes>
      <footer>
        <h2>Copyright © Restaurant 2022</h2>
      </footer>
    </div>
  )
}
export default App
