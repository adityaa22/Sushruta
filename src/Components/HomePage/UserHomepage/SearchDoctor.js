import React, { useEffect, useState } from "react";
import axios from "axios"
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./SearchDoctor.css"
import SearchCard from "./SearchCard";

const SearchDoctor = () => {
    const [doctorList, setDoctorList] = useState([])
    useEffect(() => {
        axios.post("http://localhost:9002/search-doctors", {key : "Verified"})
            .then(result => {
                // console.log(result.data)
                setDoctorList(
                    result.data
                )
            }).
            catch(err => console.log(err))
    }, [])
    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const Name = "Name"
    const Specialization = "Specialization"
    const [filter, setFilter] = useState("");
    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    const filteredData = doctorList.filter((element) => {
        // console.log(el);
        // //if no input the return the original
        if (inputText === '') {
            return element;
        }
        // // return the item which contains the user input
        else {
            const name = element.fname + " " + element.lname
            const specialization = element.specialization
            if(filter === "" || filter === Name)
                return (name.toLowerCase().includes(inputText))
            else
                return (specialization.toLowerCase().includes(inputText))
        }
    })
    // console.log(filteredData)
    
    return (
        <>
            <div className="Search">
                <div className="List">
                    <div className="search">
                        <TextField
                           fullWidth
                            label="Search Doctors"
                            onChange={inputHandler}
                            value={inputText}
                        />
                        <button > Search </button>
                        <FormControl style={{ width: '10%', position:"absolute", marginLeft:"380px"}}>
                            <InputLabel>Filter</InputLabel>
                                <Select
                                    label="Filter"
                                    onChange={handleChange}
                                    value={filter}
                                >
                                    <MenuItem value={Name} >Name</MenuItem>
                                <MenuItem value={Specialization}>Specialization</MenuItem>
                                </Select>
                        </FormControl>
                    </div>
                    
                </div>
                {
                        filteredData.map((val) => {
                            return (
                                <>
                                    <SearchCard 
                                        key={val._id}
                                        fname={val.fname}
                                        lname={val.lname}
                                        specialization={val.specialization}
                                        city={val.city}
                                    />
                                </>
                            )
                        })
                    }
           </div>
        </>
    )
}

export default SearchDoctor