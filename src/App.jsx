import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContext from './contexts/MyContext.js';
import Footer from './components/Footer.jsx';
function App() {
  const globalContext = {}

  return (
    <div>
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element='' />
          </Routes>
        </BrowserRouter>
        <Footer />
      </MyContext.Provider>
    </div>
  )
}

export default App
