import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'

function App() {
  

  return (
   <>
   <Welcome name="Amar"></Welcome>
   <Counter/>
   </>
  );
}

export default App
