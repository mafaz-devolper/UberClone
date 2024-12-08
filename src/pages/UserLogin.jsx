/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom"

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password
    })
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

          <h3 className="text-lg font-medium mb-2">What is your email</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} className="bg-[#eeeeee] w-full rounded mb-5 px-4 py-2 border outline-none placeholder:text-base" type="email" name="email" placeholder="email@example.com" required />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="password" name="password" placeholder="password" required />

          <Link to="/home" className="flex items-center justify-center bg-black text-white font-semibold w-full rounded px-4 py-2  placeholder:text-base">Login</Link>
          <p className="text-center mt-4 text-gray-800">New here ? <Link to="/signup" className="text-blue-600">Create new account</Link></p>
        </form>
      </div>
      <div className="mb-8">
        <Link to="/captain-login" className="flex items-center justify-center bg-green-300 text-black font-semibold w-full rounded px-4 py-2  placeholder:text-base">Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin