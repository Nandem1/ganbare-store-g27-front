import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './contexts/AuthContext';
import Footer from './components/Footer.jsx';
import LoginRegisterContainer from './views/LoginRegisterContainer/LoginRegisterContainer'
function App() {
  const globalContext = {}

  return (
    <div>
      <AuthContext.Provider value={globalContext}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginRegisterContainer />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthContext.Provider>
    </div>
  )
}

export default App
