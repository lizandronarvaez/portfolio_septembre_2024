import { About } from "./components/About"
import { Education } from "./components/Education"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { TechProfile } from "./components/TechProfile"

export const App = () => {

  return (
    <>
      <div className="container mx-auto">
        <About />
        <TechProfile />
        <Projects />
        <Education />
        <Footer />
      </div>
    </>
  )
}

