import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { GoodDog } from './components/GoodDog/GoodDog'
import { SmallDog } from './components/SmallDogs/SmallDog'
import { BigDogs } from './components/BigDogs/BigDogs'
import { ReactLenis } from 'lenis/react'
import { FlyingPups } from './components/FlyingPups/FlyingPups'
import { DogHistory } from './components/DogHistory/DogHistory'
import { Facts } from './components/Facts/Facts'
import { DogGod } from './components/DogGod/DogGod'

function App() {

  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <GoodDog />
      <SmallDog />
      <BigDogs />
      <FlyingPups />
      <DogHistory />
      <Facts />
      <DogGod />
    </ReactLenis>
  )
}

export default App
