import {CurrencyDollarIcon, ShoppingCartIcon, UserIcon, WalletIcon} from "@heroicons/react/24/outline";
import {ReactNode} from "react";

const CommerceCards = () => {
    return <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-6 lg:gap-20 mb-4">

        <CommerceMiniCard title='New orders' total={34567} analytic="+2.00(30 days)" isGood={true}>
            <ShoppingCartIcon className="w-5 h-5 text-purple-900"/>
        </CommerceMiniCard>

        <CommerceMiniCard title='Total Income' total={74567} analytic="+5.45 Increased" isGood={true}>
            <CurrencyDollarIcon className="w-5 h-5 text-purple-900"/>
        </CommerceMiniCard>

        <CommerceMiniCard title='Total Expense' total={24567} analytic="-2.00 Expense" isGood={false}>
            <WalletIcon className="w-5 h-5 text-purple-900"/>
        </CommerceMiniCard>

        <CommerceMiniCard title='New User' total={34567} analytic="-25.00 Earning" isGood={false}>
            <UserIcon className="w-5 h-5 text-purple-900"/>
        </CommerceMiniCard>


    </div>
}

const CommerceMiniCard = ({
                              children,
                              title,
                              isGood,
                              total,
                              analytic
                          }: { children: ReactNode, title: string, total: number, analytic: string, isGood: boolean }) => {
    const analyticColor = isGood ? 'text-green-900' : 'text-red-900'
    return <div className="flex border-2 rounded items-center gap-4 bg-white w-full  md:w-52 p-4">
        {children}
        <div className="flex flex-col gap-1">
            <p className="font-bold">{title}</p>
            <h2 className="font-bold text-2xl">${total}</h2>
            <p className={analyticColor}>{analytic}</p>
        </div>
    </div>
}

export default CommerceCards;