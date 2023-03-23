import "./App.css"
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom"
import Main from "./pages/Main/Main"
import Detail from "./pages/Detail/Detail"
import Input from "./pages/Input/Input"
import Retrieve from "./pages/Retrieve/Retrieve"
import Navbar from "./components/Navbar"
import MenuBar from "./components/Menubar"
import Slider from "./components/Slider/Slider"
import Nation from "./pages/Nation/Nation"
import Navbar11 from "./components/temp/Navbar11"
import Footer from "./components/Footer"
import SearchBox from "./components/Form/SearchBox"
import TableApp from "./components/Table/TableApp"
import CU from "./pages/Input/CU"
import { useEffect, useState } from "react"

// https://jellfyu.tistory.com/2
function App() {
    const [detailed, setDetailed] = useState(false)

    useEffect(() => {
        if (window.location.pathname === "/detail") {
            setDetailed(true)
        }
    }, [window.location.pathname])

    return (
        /////////////////////////////
        <div className="wrapper App">
            <BrowserRouter>
                <Navbar />
                <MenuBar />

                <div className="contentWrapper">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/input" element={<CU />} />
                        <Route path="/input/:value/:id" element={<CU />} />
                        <Route path="/retrieve" element={<Retrieve />} />

                        <Route path="/nation/:value" element={<Nation />} />
                        <Route
                            path="/nation/:value/:sub"
                            element={<Nation />}
                        />
                    </Routes>
                    {/* <SearchBox /> */}
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App
