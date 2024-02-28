import React from 'react'
import {useForm} from "react-hook-form"

const Movieform1 = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Fullname...' {...register("fullName")} />
        <input type='text' placeholder='Email...' {...register("email")} />
        <input type='number' placeholder='Age...' {...register("age")} />
        <input type='password' placeholder='Password...' {...register("password")} />
        <input type='password' placeholder='Confirm password...' {...register("confirmPassword")} />
        <input type='submit'/>
    </form>
  )
}

export default Movieform1