import Minicards from "@/components/fintech/minicards/minicards";
import Activities from "@/components/fintech/activities/activites";
import History from "@/components/fintech/history/history";
// @ts-ignore
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import MyBarChart from "@/components/fintech/myBarChart";
import AccountIcons from "@/components/fintech/accountIcons";


export default function Home() {

    return <>
        <div className="bg-gray-100 flex-1 p-8 overflow-y-scroll">

            {/*heading information*/}
            <div className="flex">
                <div>
                    <h3 className="text-3xl font-bold">Dashboard</h3>
                    <p className="text-neutral-500">Payment updates</p>
                </div>
            </div>

            {/*  small cards */}
            <Minicards/>


            {/*    add char here*/}
            <MyBarChart/>

            <div className="h-12"></div>


            {/*  history table  */}
            <History/>


        </div>
        <div className="hidden lg:block bg-gray-200 w-20 w-96 p-8 overflow-y-scroll">

            <AccountIcons/>

            <Cards
                cvc="4901 4901 4901 4901"
                expiry="12/18"
                focused="name"
                name="Zekaryas Tadele"
                number="412"
            />

            {/* recent activities */}
            <Activities title={"Recent activities"} date={"Mar 21, 2023"} activityType={"Recent"}/>
            <Activities title={"Upcoming payments"} date={"Mar 13, 2023"} activityType={"Payment"}/>
        </div>
    </>
}
