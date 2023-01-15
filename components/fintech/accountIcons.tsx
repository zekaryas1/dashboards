import {BellIcon, CalendarIcon} from "@heroicons/react/24/outline";
import Image from "next/image";

function AccountIcons() {
    return <div className="cursor-pointer flex justify-end gap-6 mb-4 items-center">
        <CalendarIcon className="w-5 h-5" title="Calender report"/>
        <BellIcon className="w-5 h-5 animate-bounce" title="Notifications"/>
        <Image className="rounded-full" width="30" height="30"
               src={`https://xsgames.co/randomusers/avatar.php?g=male&ref=66`} alt='profile image'
               title="account"/>
    </div>
}

export default AccountIcons;