

import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

//(in react components, the HTML we write is called JSX)
export const KandyKorner = () => {
    return (
         <>
            <NavBar />
            <ApplicationViews />
         </>
    )
}  