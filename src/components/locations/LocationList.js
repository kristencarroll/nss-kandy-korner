
import React, { useEffect, useState }from "react"

//Define and export a function that utilizes useEffect to ge the array of locations 
//from the API

export const LocationList = () => {
    //first define state using useState
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationsArray) => {
                    //invoke setLocations and pass in the state from api
                    setLocations(locationsArray)
                }) 
        },
        []
    )

    return (
        <> 
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>{locationObject.town}</p>
                    }
                )
            }
        </>
    )
} 