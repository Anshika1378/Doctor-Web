import { Route, Routes } from "react-router";
import Nav from "./Components/Home/Nav";
import Nav2 from "./Components/Home/Nav2";

function App(){
    return(
        <>
            <Routes>
                <Route path="" element={<Nav />} />
                <Route path="/FAQ" element={<Nav2 />} />
            </Routes>
           
        </>
    )
}
export default App;