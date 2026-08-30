import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { GoodDog } from './components/GoodDog/GoodDog'
import { SmallDog } from './components/SmallDogs/SmallDog'
import { BigDogs } from './components/BigDogs/BigDogs'
import { ReactLenis } from 'lenis/react'
import { FlyingPups } from './components/FlyingPups/FlyingPups'

function App() {

  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <GoodDog />
      <SmallDog />
      <BigDogs />
      <FlyingPups />
    </ReactLenis>
  )
}

export default App
