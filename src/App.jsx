import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import UsserList from './components/UsserList'
import FormUser from './components/FormUser'


function App() {
  
  const [users, setUsers] = useState()
  const [uppUser, setUppUser] = useState()
  const [showForm, setShowForm] = useState(false)

  const seeForm = (value) => {
    setShowForm(!value)
  }

  const getUser = () => {
    const url = "https://users-crud.academlo.tech/users/"
    axios.get(url)
    .then(res => { 
      setUsers(res.data)
    })
    .catch(err => console.log(err))
  }

    useEffect(() => {
      getUser()
    }, [])
    
    const newUser = (data) => {
      const url = "https://users-crud.academlo.tech/users/"

      axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getUser()
        setShowForm()
      })
      .catch(err => console.log(err))
    }

    const delUser = (id) => {
      const url  = `https://users-crud.academlo.tech/users/${id}/`
      axios.delete(url)
      .then(res =>{
        console.log("Se eliminó")
        getUser()
      })
      .catch(err => console.log(err))
    } 

    const upUser = (data) => {
      const url = `https://users-crud.academlo.tech/users/${data.id}/`
      axios.put(url, data)
      .then(res =>{ 
        console.log("uppdate complete :p")
        getUser("")
        setUppUser("")
        seeForm()
        setShowForm()
      })
      .catch(err => console.log(err))
    }

  return (
    <div className="App">
      <div className="head_logo">
        <h2>Users</h2>
        <button onClick={() => seeForm(showForm)}> <i class='bx bx-plus'></i> Create a new user :3</button>
      </div>
      
      
      <FormUser 
      newUser = {newUser} 
      uppUser = {uppUser} 
      upUser = {upUser} 
      showForm = {showForm}
      seeForm = {seeForm}
      setUppUser = {setUppUser}/>


      <div className="body_cart">
        {
        users?.map(ele =>(
          <UsserList 
          key={ele.id} 
          user = {ele} 
          delUser = {delUser} 
          setUppUser = {setUppUser}
          showForm = {showForm}
          seeForm = {seeForm}/>
        ))
      }
      </div>
      
    </div>
  )
}

export default App
