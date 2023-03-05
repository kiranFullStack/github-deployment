import React from 'react'

export default function StateAndProp({ first, email, exp, petname }) {
  return (
    <div>
      <h1>
        Name = {first}, {email}, {exp}, {petname}
      </h1>
    </div>
  )
}
