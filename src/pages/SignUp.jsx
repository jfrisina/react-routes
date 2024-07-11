// import hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: ''})

    // invoke useNavigate and save data in variable
    const nav = useNavigate()

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        nav(`/welcome/${formData.firstName}/${formData.lastName}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"placeholder="First Name" name="firstName" onChange={handleChange}></input>
        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange}></input>
        <input type="submit"></input>
        </form>
    </div>
  )
}

export default SignUp