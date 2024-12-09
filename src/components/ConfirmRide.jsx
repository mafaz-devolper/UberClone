/* eslint-disable react/prop-types */

const ConfirmRide = (props) => {
    return (
        <div>
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold mb-4">Confirm Ride</h3>
                <h5 onClick={() => {
                    props.setvehicalPanel(false)
                }} className="text-sm invert">❌</h5>
            </div>
            <div className="flex gap-2 flex-col justify-between items-center">
                <img className="h-20" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
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
                        <h3 className="font-semibold text-xl">Third Wave Coffe</h3>
                        <p className="text-gray-500">17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Benguluru, Karnataka</p>
                    </div>
                </div>
                <div className=" w-full mb-6 flex items-center  gap-2 py-2 px-4">
                    <h2>●</h2>
                    <div>
                        <h3 className="font-semibold text-xl">₹193.20</h3>
                        <p className="text-gray-500">Cash Cash</p>
                    </div>
                </div>
                <button onClick={()=>{
                    props.setvehicalFound(true)
                    props.setconfirmRidePanel(false)
                }} className="active:bg-green-400 w-full bg-green-500 text-white font-medium p-2 rounded-lg text-xl">Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide