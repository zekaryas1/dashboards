import Image from "next/image";
import {ArrowTrendingUpIcon} from "@heroicons/react/24/outline";
import React from "react";

const Member = ({rank, name, score}: { rank: number, name: string, score: number }) => {
    const borderColor = rank < 3 ? 'border-black' : 'border-gray-300'
    return <div className="hover:shadow-lg cursor-pointer flex justify-between items-center pb-2 border-b">
        <div
            className={"w-6 h-6 border-2 flex items-center justify-center rounded-full " + borderColor}>
            <p className="text-sm">{rank}</p>
        </div>
        <div className="flex flex-1 ml-9  gap-2 items-center">
            <Image className="rounded-full bg-grey-200 border-2 border-gray-300" width="30"
                   height="30"
                   src={`https://xsgames.co/randomusers/avatar.php?g=male&ref=${name}`}
                   alt={`profile picture for`}/>
            <p className="font-light">{name}</p>
        </div>
        <p className="font-bold">{score}</p>
    </div>
}

const Members = () => {
    return <>
        <div className="flex gap-4 items-center">
            <ArrowTrendingUpIcon className="w-5 h-5"/>
            <p className="text-md font-bold">Leaderboard</p>
        </div>

        <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
                <p className="text-neutral-500 uppercase">Rank</p>
                <div className="flex-1 ml-5 text-neutral-500">
                    <p className="uppercase">Members</p>
                </div>
                <p className="font-bold uppercase text-neutral-500">points</p>
            </div>

            <Member rank={1} name={'Jack Rain'} score={300}/>
            <Member rank={2} name={'Alma Barber'} score={250}/>
            <Member rank={3} name={'Isaiah Cork'} score={230}/>
        </div>
    </>
}

const LeaderBoard = () => {
    return <div className="shadow p-4 bg-white">
        <Members/>
    </div>
}

export default LeaderBoard;