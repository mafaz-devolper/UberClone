/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainSignup = () => {
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
        <img className="w-20 invert mb-4" src="/images/Uber-White-Dark-Background-Logo.wine.webp" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="text-base font-medium mb-2">What&lsquo;s our Captain&lsquo;s name</h3>
          <div className="mb-5 flex items-center justify-center gap-4">
            <input value={firstName} onChange={(e) => {
              setFirstname(e.target.value)
            }} className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border outline-none placeholder:text-base" type="text" name="name" placeholder="First Name" required />
            <input value={lastName} onChange={(e) => {
              setLastname(e.target.value)
            }} className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border outline-none placeholder:text-base" type="text" name="name" placeholder="Last Name" required />
          </div>

          <h3 className="text-base font-medium mb-2">What&lsquo;s our Captain&lsquo;s email</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} className="bg-[#eeeeee] w-full rounded mb-5 px-4 py-2 border outline-none placeholder:text-base" type="email" name="email" placeholder="email@example.com" required />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="password" name="password" placeholder="password" required />
          <div>
            <h3 className="text-base font-medium mb-2">Vehical Information</h3>
            <div className="flex items-center gap-4 justify-center">
              <input className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="text" placeholder="color" required />
              <input className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="text" placeholder="platte no" required />
            </div>
            <div className="flex items-center gap-4 justify-center">
              <input className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base" type="number" placeholder="capacity" required />
              <select className="bg-[#eeeeee] w-full rounded mb-7 px-4 py-2 border outline-none placeholder:text-base">
                <option value="bike">Bike</option>
                <option value="scooty">Scooty</option>
                <option value="car">Car</option>
                <option value="select" selected>Vehical Type</option>
              </select>
            </div>
          </div>

          <Link to="/captain-home" className="flex items-center justify-center bg-black text-white font-semibold w-full rounded px-4 py-2  placeholder:text-base">Sign Up</Link>
          <p className="text-center mt-4 text-gray-800">Already have an account? <Link to="/captain-login" className="text-blue-600">Login</Link></p>
        </form>
      </div>
      <div className="mt-8">
        <p className="text-gray-800 mb-8 text-[12px] leading-tight">This site is protected by reCAPTCH and the Google <span className="font-bold text-[13px] [text-decoration:underline]">Privecy Policy</span> and <span className="font-bold text-[13px] [text-decoration:underline]">Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup