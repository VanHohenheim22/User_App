import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

const FormUser = ({ newUser, uppUser, upUser, showForm, seeForm, setUppUser }) => {

    const { register, handleSubmit, reset } = useForm()


    useEffect(() => {
      if (uppUser) {
        reset(uppUser)
      }
    }, [uppUser])
    

    const submit = data => {
        if (uppUser) {
            upUser(data, uppUser)
        }else{
           newUser(data)
        }

        reset({
          email: '', 
          password: '', 
          first_name: '', 
          last_name: '',
          birthday: ''
        })
    }

    const rese = () =>{
      setUppUser("")
      reset({
        email: '', 
        password: '', 
        first_name: '', 
        last_name: '',
        birthday: ''
      })
    }

  return (
    <>
    {showForm ? <div className="form_back">

<div className="form_container">

  <div className="head_form">
    <h3>{uppUser ? "Edit user":"New user"}</h3>
    <i class='bx bx-x' onClick={() =>{ 
      seeForm(showForm)
      rese()
      }}></i>
  </div>

  <form onSubmit={handleSubmit(submit)}>

    <div className='components_form'>
        <label htmlFor="email">Email</label> <br />
        <input {...register("email")} type="email" placeholder='enter a email'required/>
    </div>
    <div className='components_form'>
        <label htmlFor="password">password</label> <br />
        <input {...register("password")} type="password" placeholder='enter a password'required/>
    </div>
    <div className='components_form'>
        <label htmlFor="first_name">first name</label> <br />
        <input {...register("first_name")} type="text" placeholder='enter a first name'required/>
    </div>
    <div className='components_form'>
        <label htmlFor="last_name">last name</label> <br />
        <input {...register("last_name")} type="text" placeholder='enter your last name'required/>
    </div>
    <div className='components_form'>
        <label htmlFor="birthday">birthday</label> <br />
        <input {...register("birthday")} type="date" placeholder='enter a birthday'required/>
    </div>

    <button onClick={() => seeForm(showForm)}>{ uppUser ? "Agregar cambios" : "Crear unevo usuario " }</button>
  </form>
</div>
</div>: ""}

    
    </>
  )
}

export default FormUser