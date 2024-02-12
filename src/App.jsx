import { useState } from 'react'
import { Navbar, Hero, About } from './components'
import styles from './style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter} pb-10`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <section id='home' className={`${styles.paddingX} ${styles.flexCenter} pb-6`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <section id='about' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </section>

    </div>


  )
}

export default App
