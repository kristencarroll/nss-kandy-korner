

import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css";

//(in react components, the HTML we write is called JSX)
export const KandyKorner = () => {
    return (
         <>
            <NavBar />
            <h1>Kandy Korner</h1>
            <ApplicationViews />
         </>
    )
}  