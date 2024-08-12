import { useContext, useEffect, useState } from "react";
import GameContext from "../context";
import { socket } from "../socket";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
// import * as socketEvents from "../lib/events"

export default function JoinRoomForm() {
    // state for storing room Id
    const [roomId, setRoomId] = useState<string>("");
    const { setRoom, playerId, setPlayer1, setPlayer2 } = useContext(GameContext)

    useEffect(() => {
        // event listener for player joined
        socket.on("room:player-joined", (data) => {
            // update client state with room and players details
            setPlayer2(data.player2)
            setRoom(data.room)
            setPlayer1(data.player1)
        })
    }, [])
    return (

        <Card className="p-4  w-[400px]">
            <CardContent className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-3">
                    <Label>Room Id</Label>
                    {/* Input for entering room Id */}
                    <Input placeholder="Enter Room Id" onChange={(e) => setRoomId(e.target.value)} />
                </div>
                {/* Button for joining room */}
                <Button onClick={() => {
                    // emit event player join request with room Id
                    socket.emit("room:player-join-request", { roomId: roomId, playerId })
                }}>Join Room</Button>
            </CardContent>
        </Card>

    )
}