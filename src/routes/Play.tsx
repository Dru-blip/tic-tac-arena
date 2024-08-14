import { BotIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import BackButton from "../components/BackButton";



export default function Play() {
    return (
        <div className="bg-card min-h-screen flex items-center justify-center flex-col text-white gap-4">
            <BackButton path="/" label="Home" position={{top:"top-20",left:"left-20"}}/>
            <Link to={"/cpu"}>
            <Button className="w-[300px] h-[50px] flex flex-col" variant={"outline"}>
                <p className="flex items-center"> <BotIcon className="mr-2 w-5 h-5" /> Play With AI</p>
                {/* <span className="flex items-center text-red-500"> Under development</span> */}
            </Button>
            </Link>
            <Link to={"/multiplayer"} >
                <Button className="w-[300px] h-[50px]" variant={"outline"}><UsersIcon className="mr-2 w-5 h-5" /> Play With Friend</Button>
            </Link>
        </div>
    )
}