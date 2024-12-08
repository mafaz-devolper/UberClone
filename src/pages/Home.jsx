import { useState } from "react"
import LocationSearchPanel from "../components/LocationSearchPanel"
// import { useGSAP } from "@gsap/react"
// import gsap from 'gsap'

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    // const [panelOpen, setpanelOpen] = useState(false)
    // const vehicalPanelRef = useRef(null)
    // const [panelRef, setpanelRef] = useState(null)
    // const [vehicalPanel, setvehicalPanel] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

    // useGSAP(function () {
    //     if(panelOpen){
    //         gsap.to(panelOpen.current, {
    //             height:'70%'
    //         })
    //     }else{
    //         gsap.to(panelOpen.current, {
    //             height:'0%'
    //         })  
    //     }
    // },[panelOpen])

    // useGSAP(function () {
    //     if(vehicalPanel){
    //         gsap.to(vehicalPanelRef.current, {
    //             transform:'translateY(0)'
    //         })
    //     }else{
    //         gsap.to(vehicalPanelRef.current, {
    //             transform:'translateY(100%)'
    //         })  
    //     }
    // },[vehicalPanel])

    return (
        <div className="h-screen relative">
            <img className="w-20 invert absolute top-5 left-5" src="/images/Uber-White-Dark-Background-Logo.wine.webp" alt="" />
            <div className="h-screen w-screen">
                <img className="h-full w-full object-cover" src="/images/4HjX1.webp" alt="" />
            </div>
            <div className="flex flex-col justify-end h-screen top-0 absolute w-full">
                <div className="h-[30%] p-5 bg-white relative">
                    <h5></h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line rounded-full absolute h-16 w-1 bg-gray-600 top-[43%] left-10"></div>
                        <input value={pickup} onChange={(e) => {
                            setPickup(e.target.value)
                        }} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
                        <input value={destination} onChange={(e) => {
                            setDestination(e.target.value)
                        }} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
                    </form>
                </div>
                <div className="h-[70%] p-5 bg-gray-200 ">
                    <LocationSearchPanel/>
                </div>
            </div>
            <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
                <h3 className="text-xl font-semibold mb-4">Choose a Vehical</h3>
                <div className="flex items-start border-2 active:border-black rounded-xl p-3 justify-between mb-4">
                    <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-semibold text-sm">UberGo <span className="text-xs font-medium">👤4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-500">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">₹193.20</h2>
                </div>
                <div className="flex items-start border-2 active:border-black rounded-xl p-3 justify-between mb-4">
                    <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-semibold text-sm">UberGo <span className="text-xs font-medium">👤4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-500">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">₹193.20</h2>
                </div>
                <div className="flex items-start border-2 active:border-black rounded-xl p-3 justify-between mb-4">
                    <img className="h-14" src="/images/bmw-m-series-m2-coupe-lci-modelfinder.png" alt="" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-semibold text-sm">UberGo <span className="text-xs font-medium">👤4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-500">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">₹193.20</h2>
                </div>
            </div>
        </div>
    )
}

export default Home