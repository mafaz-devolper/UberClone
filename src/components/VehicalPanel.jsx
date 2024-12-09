/* eslint-disable react/prop-types */

const VehicalPanel = (props) => {
    return (
        <div>
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold mb-4">Choose a Vehical</h3>
                <h5 onClick={() => {
                    props.setvehicalPanel(false)
                }} className="text-sm invert">❌</h5>
            </div>
            <div onClick={() => {
                props.setconfirmRidePanel(true)
            }} className="flex items-start border-2 active:border-black rounded-xl p-3 justify-between mb-4">
                <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-semibold text-sm">UberGo <span className="text-xs font-medium">👤4</span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-500">Affordable, compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
            <div onClick={() => {
                props.setconfirmRidePanel(true)
            }} className="flex items-start border-2 active:border-black rounded-xl p-3 justify-between mb-4">
                <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-semibold text-sm">UberGo <span className="text-xs font-medium">👤4</span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-500">Affordable, compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
            <div onClick={() => {
                props.setconfirmRidePanel(true)
            }} className="flex items-start border-2 active:border-black rounded-xl p-3 justify-between mb-4">
                <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-semibold text-sm">UberGo <span className="text-xs font-medium">👤4</span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="font-normal text-xs text-gray-500">Affordable, compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
        </div>
    )
}

export default VehicalPanel