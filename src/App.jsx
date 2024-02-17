import { useState } from 'react'
import { Navbar, Hero, About, Portfolio, Technologies } from './components'
import styles from './style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className=''>
        <section id='home' className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </section>
      </div>

      <section id='about' className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </section>

      <section id='portfolio' className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Portfolio />
          <Technologies />
        </div>
      </section>

    </div>


  )
}

export default App
