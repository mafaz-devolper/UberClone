import { Link } from "react-router-dom"

const WaitingForDriver = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold mb-4">Waiting for Driver</h3>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full overflow-hidden bg-green-500">
            <img className="h-full object-cover w-full" src="/images/driver.png" alt="" />
          </div>
          <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
        </div>
        <div className="flex flex-col items-end justify-center">
          <h2 className="text-lg font-medium text-gray-800">Shoeb</h2>
          <h4 className="font-bold text-xl">KA 26 MH 0034</h4>
          <p className="text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className=" w-full flex items-center  gap-2 py-2 px-4 border-b-2 border-gray-300">
          <h2>●</h2>
          <div>
            <h3 className="font-semibold text-xl">562/11-A</h3>
            <p className="text-gray-500">Kaikondrahalli, Benguluru, Karnataka</p>
          </div>
        </div>
        <div className=" w-full flex items-center  gap-2 py-2 px-4 border-b-2 border-gray-300">
          <h2>●</h2>
          <div>
            <h3 className="font-semibold text-xl">Vehical Type</h3>
            <p className="text-gray-500">4 wheelar</p>
          </div>
        </div>
        <div className=" w-full mb-6 flex items-center  gap-2 py-2 px-4">
          <h2>●</h2>
          <div>
            <h3 className="font-semibold text-xl">₹193.20</h3>
            <p className="text-gray-500">Cash Cash</p>
          </div>
        </div>
      </div>
      <Link to="/riding" className="flex items-center justify-center active:bg-green-400 w-full bg-amber-600 text-white font-medium p-2 rounded-lg text-xl">Ride Now</Link>
    </div>
  )
}

export default WaitingForDriver