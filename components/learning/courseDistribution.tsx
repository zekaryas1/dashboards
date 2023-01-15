import {ChartPieIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import {Legend, Pie, PieChart, Tooltip} from "recharts";
import React from "react";

const data1 = [
    {
        "name": "In progress",
        "value": 4,
        "fill": '#727786'
    },
    {
        "name": "Completed",
        "value": 10,
        "fill": '#080918'
    },
    {
        "name": "Yet to start",
        "value": 2,
        "fill": '#3d3d42'
    },
];

const CourseDistribution = () => {
    return <div className="shadow bg-white p-4">
        <div className="flex gap-4 items-center">
            <ChartPieIcon className="w-5 h-5"/>
            <p className="text-md font-bold">Course distribution</p>
        </div>

        <div className="flex justify-center">
            <PieChart width={730} height={250}>
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60}
                     outerRadius={80} label/>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </div>
    </div>
}

export default CourseDistribution;