import {AcademicCapIcon, UsersIcon, WalletIcon} from "@heroicons/react/24/outline";
import NavigationItem from "@/components/navigation/navigationItem";
import {useRouter} from "next/router";

function Navigation() {
    const router = useRouter();

    const {pathname} = router;

    return <div className="cursor-pointer bg-gray-200 w-20 flex flex-col pt-16 items-center">

        <NavigationItem isActive={pathname == '/'} title="fintech dashboard ui" url="/">
            <WalletIcon className="h-5 w-5 text-gray-500"/>
        </NavigationItem>
        <NavigationItem isActive={pathname == '/learn'} title="Learning management ui" url="learn">
            <AcademicCapIcon className="h-5 w-5 text-gray-500"/>
        </NavigationItem>
        <NavigationItem title="Project management ui: coming soon" url="/404">
            <UsersIcon className="h-5 w-5 text-gray-500"/>
        </NavigationItem>
    </div>
}

export default Navigation;