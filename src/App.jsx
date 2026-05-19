import { useState } from 'react'
import './App.css'
import ResumeForm from './components/ResumeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
       <h1>Welcome to AI Resume Intelligence</h1>
       <ResumeForm />
     </section>
    </>
  )
}

export default App
