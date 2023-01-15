import Image from "next/image";


interface Props {
    title: string;
    time: string;
    price: number;
    status: string;

    name: string;
}

function HistoryItem({title, time, status, price, name}: Props) {

    const colorMap = {
        'completed': 'text-green-500',
        'pending': 'text-yellow-500',
        'failed': 'text-red-500'
    }

    const getColor = (status: string) => {
        // @ts-ignore
        return colorMap[status.toLowerCase()];
    }

    return <div
        className="cursor-pointer grid grid-cols-1 gap-1 md:grid-cols-5 md:gap-24 border-t items-center rounded hover:shadow hover:bg-white py-4 px-2">
        <div className="flex gap-2 items-center">
            <Image className="w-8 h-8 rounded-full bg-grey-200 border-2 border-gray-300" width="30" height="30"
                   src={`https://xsgames.co/randomusers/avatar.php?g=female&ref=${price}`}
                   alt={`profile picture for ${title}`}/>
            <p className="font-lightbold"> {name} </p>
        </div>
        <p className="text-neutral-500"> {title}</p>
        <p className="text-neutral-500"> {time} </p>
        <p className="font-semibold">${price}</p>
        <p className={'text-center text-sm rounded bg-gray-200 ' + getColor(status)}> {status}</p>
    </div>;
}

export default HistoryItem;