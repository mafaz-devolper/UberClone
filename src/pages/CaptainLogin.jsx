/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom"


const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setcaptainData] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img className="w-20 invert mb-10" src="/images/Uber-White-Dark-Background-Logo.wine.webp" alt="" />
          <form onSubmit={(e) => { submitHandler(e) }}>

            <h3 className="text-lg font-medium mb-2">Captain&lsquo;s email</h3>
            <input value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} className="bg-[#eeeeee] w-full rounded mb-5 px-4 py-2 border outline-none placeholder:text-base" type="email" name="email" placeholder="email@example.com" required />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="password" name="password" placeholder="password" required />

            <Link to="/captain-home" className="bg-black flex items-center justify-center text-white font-semibold w-full rounded px-4 py-2  placeholder:text-base">Login</Link>
            <p className="text-center mt-4 text-gray-800">Join a fleet? <Link to="/captain-signup" className="text-blue-600">Registor as captain</Link></p>
          </form>
        </div>
        <div className="mb-8">
          <Link to="/login" className="flex items-center justify-center bg-amber-300 text-black font-semibold w-full rounded px-4 py-2  placeholder:text-base">Sign in as User</Link>
        </div>
      </div>
    </div>
  )
}

export default CaptainLogin