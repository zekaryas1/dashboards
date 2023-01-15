import React from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode,
    title: string;
    isActive?: boolean;

    url: string;
}

function NavigationItem({children, title, isActive, url}: Props) {

    const defaultClassName = "hover:bg-gray-300 hover:border-r-2 hover:border-r-black hover:animate-pulse w-full h-12 flex items-center justify-center";
    const ifActiveClassName = "border-r-2 border-r-black"
    const classNameToUse = isActive ? defaultClassName + " " + ifActiveClassName : defaultClassName;
    return <Link className={classNameToUse} title={title} href={url}>
        {children}
    </Link>
}

export default NavigationItem;