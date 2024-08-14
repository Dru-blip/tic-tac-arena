import { BotIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";



export default function Play() {
    return (
        <div className="bg-card min-h-screen flex items-center justify-center flex-col text-white gap-4">
            <Link to={"/cpu"}>
                <Button className="w-[300px] h-[50px]"  variant={"outline"}><BotIcon className="mr-2 w-5 h-5" /> Play With AI</Button>
            </Link>
            <Link to={"/multiplayer"} >
                <Button className="w-[300px] h-[50px]" variant={"outline"}><UsersIcon className="mr-2 w-5 h-5" /> Play With Friend</Button>
            </Link>
        </div>
    )
}