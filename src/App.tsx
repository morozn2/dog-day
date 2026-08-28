import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { GoodDog } from './components/GoodDog/GoodDog'
import { SmallDog } from './components/SmallDogs/SmallDog'
import { BigDogs } from './components/BigDogs/BigDogs'
import { ReactLenis } from 'lenis/react'

function App() {

  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <GoodDog />
      <SmallDog />
      <BigDogs />
    </ReactLenis>
  )
}

export default App
