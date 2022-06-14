import React from "react";
import Data from "./data.js"
import NavBar from "./NavBar.js"
import Main from "./main.js"
export default function App() {
    let data = Data.map(item => {
        return (
            <Main
                {...item}


            />
        )

    })

    return (

        <div>
            <NavBar />
            <div>
                {data}
            </div>


        </div>
    )
}