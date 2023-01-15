import Link from 'next/link'
import Image from "next/image";
function PageNotFound() {
    return <div className="flex w-full h-full justify-center items-center">
        <div>
            <Image src='https://doodleipsum.com/700?i=c0c14656dd1584d7ad6fc3e0b6cb9bf9' alt="random image" width={300} height={300}/>
            <p className="text-center"> Page not completed yet! <Link href={"/"} className="underline">Go home</Link> </p>
        </div>
    </div>
}
export default PageNotFound;