import React from 'react'

export default function StateAndProp({ first, email, exp, petname, array }) {
  return (
    <div>
      <h1>
        Name = {first}, {email}, {exp}, {petname}, {JSON.stringify(array)}
      </h1>
    </div>
  )
}
