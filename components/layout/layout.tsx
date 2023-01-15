import {ReactNode} from "react";
import Navigation from "@/components/navigation/navigation";

interface Props {
    children: ReactNode;
}

function Layout({children}: Props) {
    return <div className="w-screen h-screen flex">
        <Navigation/>
        {children}
    </div>

}

export default Layout;