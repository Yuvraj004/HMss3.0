import React, { useState } from 'react';
// const { Configuration, OpenAIApi } = require("openai");
const axios = require('axios');
function Hospitals() {
    const [HospitalList, setHospitalList] = useState([]);
    async function Find() {

        const lat = 28.621900; // User's latitude
        const lon = 77.277290; // User's longitude

        await fetch("https://bk-hms.onrender.com/hlist/hospitallist",{
            method:"POST",
            body:{
                lat,lon
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>Hospitals
            <button type="button" className="btn btn-outline-primary" onClick={() => { Find(); }}>Primary</button>
            <div>
                <ul>
                    {HospitalList.length===0 ? "No hospitals nearby" : HospitalList.map(item => {
                        return [
                            <ul key={item._id}>
                                <li>{item.properties.name}</li>
                            </ul>
                        ]
                    }
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Hospitals