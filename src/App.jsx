import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './components'
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
    </div>


  )
}

export default App
