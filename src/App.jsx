import { useState } from 'react'
import { Navbar, Hero } from './components'
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

      <section id='home' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </section>

    </div>


  )
}

export default App
