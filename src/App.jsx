
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { useLocation } from 'react-router-dom'
// import Main from './Components/Main'

function App() {
  const location = useLocation();

  console.log(location.pathname);

  const isHome = location.pathname === '/';

  return (
    <>
      <Header mode={isHome ? "fixed" : "sticky"} />

      <main className={isHome ? "min-h-[calc(100vh-120px)]" : ""}>
        <Outlet />
      </main>

      
      <Footer/>

    </>

  )
}

export default App
