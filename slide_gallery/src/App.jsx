import React, { useState } from 'react';
import './styles/app/app.css'
import { Gallery } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gallery />
    </>
  )
}

export default App
