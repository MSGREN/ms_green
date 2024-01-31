import './App.css'
import Navbar from './components/Navbar'
import HeroPage from './components/Hero/HeroPage'
import SecondPage from './components/Hero_2/SecondPage'
import ThirdPage from "./components/Hero_3/ThirdPage"
import FourthPage from './components/Hero_4/FourthPage'
import FifthPage from './components/Hero_5/FifthPage'
import SixthPage from './components/Hero_6/SixthPage'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollBtn/ScrollToTopButton'
import ProgressPieLoder from './components/Progress/Progress'



function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <SecondPage/>
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />    
        
      <Footer />  
     <ScrollToTopButton/>
     <ProgressPieLoder />
    </>
  )
}

export default App
