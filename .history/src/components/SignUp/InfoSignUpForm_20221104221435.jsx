import React from 'react'
import { useForm } from 'react-hook-form'



const InfoSignUpForm = () => {

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleOnSubmit = (formData) => {
        
    }

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      
    </form>
  )
}

export default InfoSignUpForm
