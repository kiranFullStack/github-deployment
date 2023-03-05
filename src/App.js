import { useState } from 'react'
import './App.css'
import Second from './Second'
import StateAndProp from './StateAndProp'

function App() {
  const [first, setfirst] = useState('Kiran')
  const [email, setemail] = useState('kiran@email.com')

  const [exp, setexp] = useState(10)

  const [petname, setpetname] = useState('dingu')

  return (
    <div className='App'>
      {first}
      <StateAndProp
        first={first}
        email={email}
        exp={exp}
        petname={petname}
      />
      <Second
        first={first}
        email={email}
        exp={exp}
        petname={petname}
      />
    </div>
  )
}

export default App
