import { Routes, Route } from 'react-router-dom'

import Header from '../Header'
import Home from '../Home'
import Calendar from '../Calendar'
import '../index.css'

function App() {
  return (
    <>
    <p className="font-extrabold">App</p>
    <Header />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='calendar' exact element={<Calendar />} />
    </Routes>
    </>
  )
}

export default App
