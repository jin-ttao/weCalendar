import { Routes, Route } from 'react-router-dom'

import Header from '../Header'
import Home from '../Home'
import '../App.css'

function App() {
  return (
    <>
    <div>App</div>
    <Header />
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes>
    </>
  )
}

export default App
