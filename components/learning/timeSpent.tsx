import {ClockIcon} from "@heroicons/react/24/outline";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

const lineChartData = [
    {
        "name": "Mon",
        "time": 8,
    },
    {
        "name": "Thu",
        "time": 6,
    },
    {
        "name": "Wed",
        "time": 4,
    },
    {
        "name": "Thu",
        "time": 5,
    },
    {
        "name": "Fri",
        "time": 4,
    },
    {
        "name": "Sat",
        "time": 4,
    },
    {
        "name": "Sun",
        "time": 10,
    }
]

const TimeSpent = () => {
    return <div className="shadow p-4 bg-white">
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <ClockIcon className="w-5 h-5"/>
                <p className="text-md font-bold">Time spent</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-red-700">+12%</p>
                <h2 className="text-xl">23h 40m</h2>
            </div>
        </div>

        <div className="mb-8"></div>
        <div className="overflow-x-scroll">
            <LineChart width={730} height={250} data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="time" stroke="#000"/>
            </LineChart>
        </div>
    </div>
}


export default TimeSpent;