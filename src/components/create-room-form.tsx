import { useContext } from "react";
import { toast } from "sonner";
import GameContext from "../context";
import { socket } from "../socket";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export default function CreateRoomForm() {

    // const [name, setName] = useState<string>("");
    const { setRoom ,playerId} = useContext(GameContext)
    return (
        <div>
            <Card className="p-2 w-[400px]">
                <CardHeader>
                    <CardTitle>Create Room</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4">
                    {/* Button for creating room */}
                    <Button onClick={() => {
                        // send create room request
                        socket.emit("room:create")
                        // event listener for room created
                        socket.on("room:created", (room) => {
                            // update room details of the player
                            setRoom(room)
                            // display success notification on room creation
                            toast.success("Room created")
                            // emit player join request
                            socket.emit("room:player-join-request",{roomId:room?.roomId,playerId})
                        })
                    }}>Create Room</Button>
                </CardContent>
            </Card>
        </div>
    )
}