import Image from "next/image";
import React from "react";

const ActiveCourseInformation = () => {

    return <>
        <h1 className="text-xl font-bold"> Jan 15 2024 </h1>
        <p className="text-neutral-500 text-sm">Today</p>

        <Image src='https://doodleipsum.com/700/abstract?i=2950d197771be2105d7d9a91975907bc' width="400"
               height="400" alt="happy face"/>

        <h1 className="text-xl font-bold mt-4">Building a team: an interactive course</h1>
        <p className="text-neutral-500">
            This course offers 12 collaborative session to help
            improve your productivity in demanding scenarios
        </p>
        <p className="text-right">2/8 chapters completed</p>

        <ol className="list-decimal p-4 space-y-2">
            <li className="line-through">Introduction to course</li>
            <li className="line-through">Building your team</li>
            <li>Building empty to understand your team</li>
        </ol>

        <button className="bg-blue-900 p-2 text-white">Go to chapters</button>
    </>

}

export default ActiveCourseInformation;