import React from 'react'
import { useForm } from 'react-hook-form'



const InfoSignUpForm = () => {

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

  return (
    <form onSubmit={hanlde}>
      
    </form>
  )
}

export default InfoSignUpForm
