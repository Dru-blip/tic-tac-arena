import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";


interface Props {
    path: string
    label?: string
    position?: {
        top?: string
        left?: string
        right?: string
        bottom?: string
    }
}

export default function BackButton({ path, position,label }: Props) {
    return (
        <Link to={path} className={`text-white absolute ${position?.top} ${position?.left} ${position?.right} ${position?.bottom}`}>
            <Button variant={"outline"}> <ArrowLeftIcon className="mr-2 w-4 h-4" />
                {label??"Back"}
            </Button>
        </Link>
    )
}