import React, { useState } from 'react'

export default function Second({ first, email, exp, petname }) {
  const [ownState, setownState] = useState('OWN')
  return (
    <div>
      Second={first}, {email}, {exp}, {petname}
      <h1>Second ={ownState}</h1>
    </div>
  )
}
