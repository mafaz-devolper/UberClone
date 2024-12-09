import { useRef, useState } from "react"
import LocationSearchPanel from "../components/LocationSearchPanel"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import VehicalPanel from "../components/VehicalPanel"
import ConfirmRide from "../components/ConfirmRide"
import WaitingForDriver from "../components/WaitingForDriver"

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setpanelOpen] = useState(false)
    const [vehicalPanel, setvehicalPanel] = useState(false)
    const [confirmRidePanel, setconfirmRidePanel] = useState(false)
    const [WaitingForDriverPanel, setWaitingForDriverPanel] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehicalPanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const WaitingForDriverRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: "70%",
                opacity: "1",
            })
            gsap.to(panelCloseRef.current, {
                opacity: "1",
            })
        } else {
            gsap.to(panelRef.current, {
                height: "0%",
                opacity: "0",
            })
            gsap.to(panelCloseRef.current, {
                opacity: "0",
            })
        }

    }, [panelOpen])


    useGSAP(() => {
        if (vehicalPanel) {
            gsap.to(vehicalPanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(vehicalPanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [vehicalPanel])

    useGSAP(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [confirmRidePanel])



    useGSAP(() => {
        if (WaitingForDriverPanel) {
            gsap.to(WaitingForDriverRef.current, {
                transform: "translateY(0)"
            })
        } else {
            gsap.to(WaitingForDriverRef.current, {
                transform: "translateY(100%)"
            })
        }
    }, [WaitingForDriverPanel])


    return (
        <div className="h-screen relative overflow-hidden">
            <img className="w-20 invert absolute top-5 left-5" src="/images/Uber-White-Dark-Background-Logo.wine.webp" alt="" />
            <div className="h-screen w-screen">
                <img className="h-full w-full object-cover" src="/images/4HjX1.webp" alt="" />
            </div>
            <div className="flex flex-col justify-end h-screen top-[6%] absolute w-full">
                <div className="h-[30%] p-5 bg-white relative">
                    <div className="flex items-start justify-between">
                        <h4 className="text-2xl font-semibold">Find a trip</h4>
                        <h5 ref={panelCloseRef} onClick={() => {
                            setpanelOpen(false)
                        }} className="text-sm invert opacity-0">❌</h5>
                    </div>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line rounded-full absolute h-16 w-1 bg-gray-600 top-[43%] left-10"></div>
                        <input onClick={() => {
                            setpanelOpen(true)
                        }} value={pickup} onChange={(e) => {
                            setPickup(e.target.value)
                        }} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up location" />
                        <input onClick={() => {
                            setpanelOpen(true)
                        }} value={destination} onChange={(e) => {
                            setDestination(e.target.value)
                        }} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
                    </form>
                </div>
                <div ref={panelRef} className="h-[0%] p-5 opacity-0 bg-gray-200">
                    <LocationSearchPanel setpanelOpen={setpanelOpen} setvehicalPanel={setvehicalPanel} />
                </div>
            </div>
            <div ref={vehicalPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
                <VehicalPanel setconfirmRidePanel={setconfirmRidePanel} setvehicalPanel={setvehicalPanel} />
            </div>
            <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6">
                <ConfirmRide setconfirmRidePanel={setconfirmRidePanel} setvehicalFound={setWaitingForDriverPanel} />
            </div>
            <div ref={WaitingForDriverRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6">
                <WaitingForDriver />
            </div>
        </div>
    )
}

export default Home