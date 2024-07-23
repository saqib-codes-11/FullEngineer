import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import Footer from "./components/footer/Footer";
import React from "react";
import {changeColorMode} from "./reducers/colorSlice";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(changeColorMode());
    }, [dispatch])
    return (
        <div id="App">
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
