import React from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    price: number;
}

function Minicard({children, title, price}: Props) {
    return <div className="cursor-pointer hover:shadow-xl bg-white shadow rounded w-full md:w-32 p-4 space-y-4">
        {children}
        <p className="text-neutral-500"> {title} </p>
        <p className="text-xl font-bold">${price}</p>
    </div>
}

export default Minicard;