import React from 'react';
import {useState } from "react";
import RobotAdress from "./RobotAdress";

function RobotCard ({name, username,email,phone,website,address,id}) {
    const [display, setDisplay] = useState(false);
    function togleDisplay() {
        setDisplay(!display)     
    }
   
    return (
        <>
        <div>
            <img src= {`https://robohash.org/${id}`} alt="" style={{ maxWidth: '100px' }}/>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
       <button onClick={togleDisplay}>{display ? "voir moins" : "voir plus"}</button> 
        {display?
        <RobotAdress
        suite={address.suite}
        zipcode={address.zipcode}
        city={address.zipcode} />
        : null    
        }
        
        </>
    )
};
export default RobotCard;