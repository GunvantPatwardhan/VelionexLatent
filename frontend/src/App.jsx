import {Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import WirelessPage from "./pages/WirelessPage"
import InternetPage from "./pages/InternetPage"
import DirectvPage from "./pages/DirectvPage"
import AboutUsPage from "./pages/AboutUsPage"
import Navbar from "./components/Navbar"
import { Box } from "@chakra-ui/react"
function App() {
  return (
    <Box minH={"100vh"} bg="white">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/wireless" element={<WirelessPage />}></Route>
        <Route path="/internet" element={<InternetPage />}></Route>
        <Route path="/directv" element={<DirectvPage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
      </Routes>
    </Box>
  )
}

export default App
