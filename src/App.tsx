import Header from "./components/Header"
import Hero from "./components/Hero"
import { Counter } from "./features/counter/Counter"

function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero
        image="./dude.png"
        title="Maak je outfit compleet met persoonlijk bescherming"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dignissim lacus, eget ultricies ante iaculis eget. Nam vitae tincidunt felis."
        buttonText="Check ons assortiment"
      />
      <Counter />
    </div>
  )
}

export default App
