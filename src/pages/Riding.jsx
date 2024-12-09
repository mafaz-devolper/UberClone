import { Link } from "react-router-dom"

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed m-4 flex items-center justify-center">
        <h4 className="px-3 py-1 rounded-lg text-xl bg-black text-white">Home</h4>
      </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src="/images/4HjX1.webp" alt="" />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between mb-4">
          <img className="h-16" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
          <div className="flex flex-col items-end justify-center">
            <h2 className="text-sm font-medium text-gray-800">Shoeb</h2>
            <h4 className="font-bold text-xl">KA 26 MH 0034</h4>
            <p className="text-gray-600 text-sm">Maruti Suzuki Alto</p>
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
          <div className=" w-full mb-6 flex items-center  gap-2 py-2 px-4">
            <h2>●</h2>
            <div>
              <h3 className="font-semibold text-xl">₹193.20</h3>
              <p className="text-gray-500">Cash Cash</p>
            </div>
          </div>
        </div>
        <Link onClick={()=>{
          alert("Payment Done Successfully")
        }} to="/home" className="flex items-center justify-center active:bg-green-400 w-full bg-green-500 text-white font-medium p-2 rounded-lg text-xl">Make a Payment</Link>
      </div>
    </div>
  )
}

export default Riding