import { Routes, Route } from "react-router-dom"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Onboarding from "./pages/Onboarding"
import Home from "./pages/Home"
import UserLogout from "./pages/UserLogout"
import CaptainLogout from "./pages/CaptainLogout"
import CaptainHome from "./pages/CaptainHome"
import Riding from "./pages/Riding"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/user-logout" element={<UserLogout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-logout" element={<CaptainLogout />} />
        <Route path="/captain-home" element={<CaptainHome />} />
      </Routes>
    </div>
  )
}

export default App