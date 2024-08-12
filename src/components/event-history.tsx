import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function EventHistory() {
    const [messages, setMessages] = useState<string[]>([])
    useEffect(() => {
        socket.on("broadcast:room:player-joined", (data) => {
            // console.log(data)
            setMessages([...messages, data.joinedPlayer+" joined the room"])
        })
    }, [])
    return (
        <div>
            {
                messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))
            }
        </div>
    )
}