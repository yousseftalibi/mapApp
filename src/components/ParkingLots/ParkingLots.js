import React, { useEffect } from 'react'
import { useState } from 'react';
const ParkingLots = () => {

    const [parkingLots, setParkingLots] = useState(null)

    useEffect(() => {
        getLots();
    }, [])

    const getLots = async () => {
        const request = await fetch(
            'http://127.0.0.1:5000/parkingLots',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },

            }
        )

        const response = await request.json();
        setParkingLots(response)
    }

    return (
        <div style={{ position: "absolute", top: "70px" }}>
            {parkingLots &&
                <pre style={{ fontSize: '15px' }}>
                    {JSON.stringify(parkingLots, null, 20
                    )}
                </pre>
            }
        </div>
    )
}

export default ParkingLots;