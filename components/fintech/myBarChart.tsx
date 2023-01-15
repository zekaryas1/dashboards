import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

function MyBarChart() {
    const data = [
        {
            "name": "JAN",
            "balance": 4000,
        },
        {
            "name": "FEB",
            "balance": 3000,
        },
        {
            "name": "MAR",
            "balance": 2000,
        },
        {
            "name": "APR",
            "balance": 2780,
        },
        {
            "name": "MAY",
            "balance": 1890,
        },
        {
            "name": "JUN",
            "balance": 2390,
        },
        {
            "name": "JUL",
            "balance": 3490,
        }
    ]



    return <div className="w-full h-64 my-8">
        <div className="flex mb-6">
            <div>
                <h3 className="text-3xl font-bold">Balance</h3>
                <p className="text-neutral-500">For past months</p>
            </div>
        </div>
        <div className="overflow-x-scroll">
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="balance" fill="#000"/>
            </BarChart>
        </div>
    </div>
}

export default MyBarChart;