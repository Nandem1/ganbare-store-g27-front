import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContext from './contexts/MyContext.js';
import Footer from './components/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Compras from './components/Compras/Compras.jsx';
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
        <Header />
        <Compras />
        <Footer />
      </MyContext.Provider>
    </div>
  )
}

export default App
