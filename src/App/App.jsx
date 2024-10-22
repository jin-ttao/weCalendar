import { Routes, Route } from 'react-router-dom'

import Header from '../widgets/Header'
import Home from '../Home'
import Calendar from '../pages/Calendar'
import '../index.css'
import Monthly from '../widgets/Monthly'

function App() {
  return (
    <>
    <p className="font-extrabold">App</p>
    <Header />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='calendar' exact element={<Calendar />}>
        <Route path=':year:month:day' element={<Monthly />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
