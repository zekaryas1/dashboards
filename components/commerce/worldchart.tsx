import React from "react"
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json"

export default function MapChart() {
    return (
        <ComposableMap projection="geoAlbers">
            <Geographies geography={geoUrl}>
                {({geographies}) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill="#DDD"
                                   stroke="#FFF"/>
                    ))
                }
            </Geographies>
            <Marker coordinates={[-101, 53]} fill="#777">
                <text textAnchor="middle" fill="#000">
                    Canada - 1545
                </text>
            </Marker>
            <Marker coordinates={[-102, 38]} fill="#777">
                <text textAnchor="middle" fill="#000">
                    USA - 2452
                </text>
            </Marker>
            <Marker coordinates={[-103, 25]} fill="#777">
                <text textAnchor="middle" fill="#000">
                    Mexico - 945
                </text>
            </Marker>
        </ComposableMap>
    )
}
