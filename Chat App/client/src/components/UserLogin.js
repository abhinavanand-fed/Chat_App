import React, { useState } from 'react'
import _ from 'lodash'

const button = {
  width: '10%',
  height: '50px',
  fontWeight: 'bold',
  borderRadius: '10px',
  fontSize: '18px',
  backgroundColor: '#075e54',
  borderWidth: '0',
  color: '#fff',
  margin: '10px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#0B8043',
  },
}

const input = {
  margin: '10px',
  height: '30px',
  width: '25%',
  borderRadius: '10px',
  borderWidth: '2px',
  borderColor: '#ccc',
  fontSize: '15px',
  paddingInline: '5px',
  outline: 'none',
  '&::placeholder': {
    color: '#999',
  },
}

const container = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
}

const title = {
  margin: '10px',
  textAlign: 'center',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#333',
}

export default function UserLogin({ setUser }) {
  const [user, setAUser] = useState('')

  function handleSetUser() {
    if (!user) return
    localStorage.setItem('user', user)
    setUser(user)
    localStorage.setItem(
      'avatar',
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    )
  }

  return (
    <div style={container}>
      <h1 style={title}>Chat App</h1>

      <input
        style={input}
        value={user}
        onChange={(e) => setAUser(e.target.value)}
        placeholder="Write a random name"
      />

      <button style={button} onClick={() => handleSetUser()}>
        Login
      </button>
    </div>
  )
}
