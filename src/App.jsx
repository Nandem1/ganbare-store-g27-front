import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Home from './views/home/Home.jsx';
import LoginRegisterContainer from './views/LoginRegisterContainer/LoginRegisterContainer';
function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loginRegister' element={<LoginRegisterContainer />} />
          </Routes>
        </BrowserRouter>
        <Header />
        <Hero />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
