// The Page
import './App.css'
// Components
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from "./components/Work"
import Solution from './components/Solutions'
import Differ from './components/Differ'
import News from './components/News'
import Events from './components/Events'
import Review from './components/Review'
import Footer from './components/Footer'
import Stats from './components/Stats'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Work/>
      <Solution/>
      <Differ/>
      <Stats/>
      <News/>
      <Events/>
      <Review/>
      <Footer/>
    </>
  )
}

export default App
