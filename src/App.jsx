import '@/styles/main/fonts.scss'
import '@/styles/main/index.scss'
import { Footer } from '/components/common/Footer'
import { Header } from '/components/common/Header'
import { Aboutme } from '/components/sections/Aboutme'
import { Welcom } from '/components/sections/Welcom'

function App() {

  return (
    <>
      <Header />
      <Welcom />
      <Aboutme />
      <Footer />
    </>
  )
}

export default App
