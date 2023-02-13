import React, { useState } from 'react'

const UsserList = ({ user, delUser, setUppUser, showForm, seeForm }) => {

  return (
  
    <div className='user_contain'>

      <div className="head_user">
         <h3>{`${user?.first_name} ${user?.last_name}`}</h3>
        <hr />
      </div>

      <div className="infoUser">
        <span>Email: <br /> <b> {user.email} </b> </span> <br />
        <span>Birthdate: <br /> <i class='bx bx-gift'></i> <b>{user.birthday}</b> </span>
        <hr />
      </div>

      <div className="butt_user">

          <button className='butts butt_trash' onClick={() => delUser(user.id)}> <i class='bx bx-trash'></i> </button>
        
          <button className='butts butt_upp' onClick={() =>{
          setUppUser(user) 
          seeForm(showForm)
          } }> <i class='bx bx-pencil'></i> </button>

        
        </div>
      </div>
      
  )
}

export default UsserList