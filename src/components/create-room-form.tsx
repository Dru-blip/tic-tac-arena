import { useContext, useEffect } from "react";
import { toast } from "sonner";
import GameContext from "../context";
import { socket } from "../socket";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export default function CreateRoomForm() {
    // const [name, setName] = useState<string>("");
    const { setRoom, playerId } = useContext(GameContext)

    useEffect(() => {
        socket.on("playerJoined", (data) => {
            setRoom(data)
        })
    }, [])
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
                        socket.emit("createRoom")
                        // event listener for room created
                        socket.on("roomCreated", (roomId) => {
                            // display success notification on room creation
                            toast.success("Room created")
                            // emit player join request
                            socket.emit("joinRoom", { id: roomId, playerId })
                        })

                    }}>Create Room</Button>
                </CardContent>
            </Card>
        </div>
    )
}