import { Link } from "react-router-dom"

const Onboarding = () => {
  return (
    <div>
        <div className="bg-cover bg-center bg-[url(/images/Ride-with-Uber.webp)] h-screen pt-6 flex justify-between flex-col w-full">
            <img className="w-20 ml-8 invert" src="/images/Uber-White-Dark-Background-Logo.wine.webp" alt="" />
            <div className="bg-white py-4 pb-7 px-4">
                <h2 className="text-3xl font-bold">Get Started with Uber</h2>
                <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Onboarding