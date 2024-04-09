import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const fetchData = ()=> {
    fetch('/mortyap.json')
      .then(res=>res.json())
      .then(data => {
        setUsers(data.results)
      })
      .catch(err => console.log(err.message))
    
  }

  //useEffect(fetchData, [])

  return (
    <div>
      <h1>Użytkownicy</h1>
      <button onClick={fetchData}>Kliknij snikersa</button>
      <ul>
        {users.map(user=>{
          return <li key={user.id}>{user.name}, {user.species}, {user.status}</li>
        })}
      </ul>
    </div>
  )
}

export default App
