import { useState } from 'react'
import { Navbar, Hero, About, Portfolio, Technologies, Contact, Footer } from './components'
import styles from './style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-full overflow-hidden'>

      <section id='nav' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </section>

      <section id='home' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <section id='about' className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </section>

      <section id='portfolio' className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Portfolio />
        </div>
      </section>
      
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Technologies />
        </div>
      </section>

      <section id='contact' className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </section>

      <section className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </section>
      

    </div>


  )
}

export default App
