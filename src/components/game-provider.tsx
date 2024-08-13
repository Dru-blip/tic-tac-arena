import { useState } from "react";
import GameContext from "../context";
import { IBoard, IPlayer, IRoom } from "../types";


// props for GameProvider 
interface ProviderProps {
    children: React.ReactNode
}

export default function GameProvider({ children }: ProviderProps) {
    // state for room info
    const [room, setRoom] = useState<IRoom>()

    //check sessionStorage for playerId,if yes parse it to number,else set it to -2550
    const [playerId, setPlayerId] = useState<number>(sessionStorage.getItem("playerId") ? parseInt(sessionStorage.getItem("playerId")!) : -2550)
    return (
        <GameContext.Provider value={{ room, setRoom, playerId, setPlayerId }}>
            {children}
        </GameContext.Provider>
    )
}