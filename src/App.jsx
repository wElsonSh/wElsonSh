import { Header } from '@/components/common/Header'
import { Welcom } from '@/components/sections/Welcom'
import '@/styles/main/fonts.scss'
import '@/styles/main/index.scss'

function App() {

  return (
    <main className='wrapper'>
      <Header />
      <Welcom />
    </main>
  )
}

export default App
