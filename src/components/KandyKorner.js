

import React from "react"
import { LocationList } from "./locations/LocationList"

//(in react components, the HTML we write is called JSX)
export const KandyKorner = () => {

    //render CustomerList under h1
    return (
        <>
            <h1>Kandy Korner</h1>

            <h2>Location List</h2>
            <LocationList />
        </>
        )

}