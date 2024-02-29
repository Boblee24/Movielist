import React from 'react'
import * as yup from 'yup'
import {useForm} from "react-hook-form"

const Movieform1 = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    const schema = yup.object().shape({
        fullName : yup.string().required(),
        email : yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password"), null]).required()
    })
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