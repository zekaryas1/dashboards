import {ReactNode} from "react";


interface Props {
    children: ReactNode;
    title: string;
    status: string;
    price: number;
}

function ActivityItem({children, price, status, title}: Props) {
    return <div className="hover:bg-gray-300 hover:shadow-lg cursor-pointer rounded py-2 mt-2 flex gap-2 justify-between items-center">
        <div className="p-3 rounded-2xl bg-white h-full">
            {children}
        </div>
        <div className="flex-1">
            <h2 className="font-light"> {title} </h2>
            <p className="text-sm text-neutral-500"> {status}</p>
        </div>
        <p className="font-bold">${price}</p>
    </div>;
}

export default ActivityItem;