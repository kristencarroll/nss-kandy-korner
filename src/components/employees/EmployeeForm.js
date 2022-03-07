import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"



//export and define a function that creates a hiring form for a 
//new employee
export const EmployeeForm =() => {
    //useState to give some initial properties to the object, 
    //name-string, manager false, fullTime false, hourly rate string
    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: "",
    })
    //import and set a variable to useHistory to route back to the /employees 
    //url once the form is submitted
    const history = useHistory()
    
    const [locations, setLocations] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    //define a submitEmployee function that runs when the "hire employee"
    //button is clicked 
    const submitEmployee = (event) => {
        event.preventDefault() 
    
        //declare a newEmployee variable that will be POSTed in the fetch call
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
        .then(() => {
            history.push("/employees")
        })


    }

    return (
                <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                setEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="name"
                        className="form-control"
                        placeholder="Full Name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Store Location:</label>
                    <select id="location" className="form-control"
                    
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                //if (event.target.id === employee.locationId) {
                                copy.locationId = parseInt(event.target.value)
                                setEmployee(copy)
                               // }
                            }
                        }
                        required autoFocus
                        placeholder="Store Location">
                    
                        <option value="0">Select Location</option>
                            
                            {locations.map((location) => {
                            return <option value={location.id}>{location.town}</option>

                        })}
                        
                        
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.manager = event.target.checked
                                setEmployee(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="full-time">Full Time:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.fullTime = event.target.checked
                                setEmployee(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourly-rate">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.hourlyRate = event.target.value
                                setEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="hourly-rate"
                        className="form-control"
                        placeholder="Expected Hourly Rate"
                        />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Hire Employee
            </button>
        </form>
    ) 


}
    