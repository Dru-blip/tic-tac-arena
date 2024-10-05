import { useState } from "react";
import { MultiplayerGameContext } from "../../context";
import { socket } from "../../socket";
import { IRoom } from "../../types";


// props for GameProvider 
interface ProviderProps {
    children: React.ReactNode
}

export default function GameProvider({ children }: ProviderProps) {
    // state for room info
    const [room, setRoom] = useState<IRoom>()

    //check sessionStorage for playerId,if yes parse it to number,else set it to -2550
    const [playerId, setPlayerId] = useState<string>(socket.id!)
    return (
        <MultiplayerGameContext.Provider value={{ room, setRoom, playerId, setPlayerId }}>
            {children}
        </MultiplayerGameContext.Provider>
    )
}