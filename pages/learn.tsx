import {TrophyIcon} from "@heroicons/react/24/outline";
import React from "react";
import LeaderBoard from "@/components/learning/members";
import CourseDistribution from "@/components/learning/courseDistribution";
import ActiveCourseInformation from "@/components/learning/activeCourseInformation";
import TimeSpent from "@/components/learning/timeSpent";

function Learn() {

    const Info = ({score, scoreTitle}: { score: number, scoreTitle: string }) => {
        return <div className="hover:shadow-xl cursor-pointer h-32 shadow bg-white p-4 flex flex-col">
            <TrophyIcon className="w-5 h-5"/>
            <div className="flex-1 text-center">
                <h2 className="text-xl font-bold">{score}</h2>
                <p className="text-sm text-neutral-500">{scoreTitle}</p>
            </div>
        </div>
    }


    return <>
        <div className="bg-gray-100 flex-1 p-8 overflow-y-scroll">

            <div className="gap-8 grid grid-cols-1 xl:grid-cols-2 mb-4">

                <CourseDistribution/>

                <div className="gap-8 grid grid-cols-1">

                    <div className="grid grid-cols-2 gap-8">
                        <Info score={2} scoreTitle="Course certificate"/>
                        <Info score={35} scoreTitle="Reward points"/>
                    </div>

                    <LeaderBoard/>

                </div>
            </div>

            <TimeSpent/>

        </div>
        <div className="hidden lg:block bg-gray-200 w-20 w-96 p-8 overflow-y-scroll">
            <ActiveCourseInformation/>
        </div>
    </>
}

export default Learn;