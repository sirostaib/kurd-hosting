import React from 'react'
import MyMapComponent from './Map'
import Header from './Header'

export default function MapPage() {
    return (
        <div>
            <Header></Header>
            <MyMapComponent isMarkerShown ></MyMapComponent>
        </div>
    )
}
