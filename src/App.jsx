import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './contexts/AuthContext';
import Footer from './components/footer/Footer.jsx';
import LoginRegisterContainer from './views/LoginRegisterContainer/LoginRegisterContainer'
import Home from './views/home/Home.jsx';
function App() {
  const globalContext = {}

  return (
    <div>
      <AuthContext.Provider value={globalContext}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginRegisterContainer />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthContext.Provider>
    </div>
  )
}

export default App
