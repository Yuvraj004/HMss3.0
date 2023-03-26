import React from 'react';
//api_key=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
// const { Configuration, OpenAIApi } = require("openai");
const axios = require('axios');
function Hospitals() {
    async function Find() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fb6fd3f32cmshbcc61656eddcf1ep1adcddjsn08081e187640',
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
                'access-control-allow-origin':'*'
            }
        };
        
        await fetch('https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/geoname?name=Delhi', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

        return (
            <div>Hospitals
                <button type="button" className="btn btn-outline-primary" onClick={() => { Find(); }}>Primary</button>
            </div>
        )
    }

    export default Hospitals