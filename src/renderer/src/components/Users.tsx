import { useState } from 'react'

type User = {
  id: number
  firstName: string
  lastName: string
}

function Users(): JSX.Element {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async (): Promise<void> => {
    const results = await window.electron.ipcRenderer.invoke('get-users')
    setUsers(results)
  }

  const addUser = async (): Promise<void> => {
    await window.electron.ipcRenderer.invoke('add-user', {
      firstName,
      lastName
    })

    setFirstName('')
    setLastName('')
    getUsers()
  }

  return (
    <div>
      <h4>Users:</h4>
      <button onClick={() => getUsers()}>Get Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName + ' ' + user.lastName}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(ev) => setFirstName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value)}
        />
        <button onClick={() => addUser()}>Add User</button>
      </div>
    </div>
  )
}

export default Users
