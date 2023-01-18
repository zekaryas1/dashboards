import {
    EyeDropperIcon,
    LightBulbIcon,
    TruckIcon,
    WifiIcon
} from "@heroicons/react/24/outline";
import ActivityItem from "@/components/fintech/activities/activityItem";
import {CurrencyDollarIcon, HomeIcon} from "@heroicons/react/24/outline";


interface Props {
    title: string;
    date: string;

    activityType: 'Payment' | 'Recent';
}

function Activities({title, date, activityType}: Props) {

    const RecentActivities = () => {
        return <>
            <ActivityItem title="Internet bill" status="Successful" price={120}>
                <WifiIcon className="w-5 h-5"/>
            </ActivityItem>

            <ActivityItem title="Water bill" status="Successful" price={4500}>
                <EyeDropperIcon className="w-5 h-5"/>
            </ActivityItem>

            <ActivityItem title="Salary" status="Received" price={150}>
                <CurrencyDollarIcon className="w-5 h-5"/>
            </ActivityItem>

            <ActivityItem title="Electric bill" status="Successful" price={60}>
                <LightBulbIcon className="w-5 h-5"/>
            </ActivityItem>
        </>
    }

    const PaymentActivities = () => {
        return <>
            <ActivityItem title="Home rent" status="Pending" price={1500}>
                <HomeIcon className="w-5 h-5"/>
            </ActivityItem>

            <ActivityItem title="Car insurance" status="Pending" price={150}>
                <TruckIcon className="w-5 h-5"/>
            </ActivityItem>

        </>
    }

    return <div className="mt-4">
        <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-neutral-500"> {date} </p>
        </div>


        {activityType == 'Payment' ? <PaymentActivities/> : <RecentActivities/>}


    </div>
}

export default Activities;