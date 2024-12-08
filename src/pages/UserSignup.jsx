/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { useState } from "react"


const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password);
    setuserData({
      fullname: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 invert mb-10" src="/images/Uber-White-Dark-Background-Logo.wine.webp" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="text-base font-medium mb-2">What is your name</h3>
          <div className="mb-5 flex items-center justify-center gap-4">
            <input value={firstName} onChange={(e) => {
              setFirstname(e.target.value)
            }} className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border outline-none placeholder:text-base" type="text" name="name" placeholder="First Name" required />
            <input value={lastName} onChange={(e) => {
              setLastname(e.target.value)
            }} className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border outline-none placeholder:text-base" type="text" name="name" placeholder="Last Name" required />
          </div>

          <h3 className="text-base font-medium mb-2">What is your email</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} className="bg-[#eeeeee] w-full rounded mb-5 px-4 py-2 border outline-none placeholder:text-base" type="email" name="email" placeholder="email@example.com" required />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="password" name="password" placeholder="password" required />

          <Link to="/home" className="flex items-center justify-center bg-black text-white font-semibold w-full rounded px-4 py-2  placeholder:text-base">Sign Up</Link>
          <p className="text-center mt-4 text-gray-800">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
        </form>
      </div>
      <div className="mb-4">
        <p className="text-gray-800 text-[12px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup