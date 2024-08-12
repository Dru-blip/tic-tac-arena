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
    // state for board
    const [board, setBoard] = useState<IBoard>()
    const [player1, setPlayer1] = useState<IPlayer>()
    // state for player 1 and player 2
    const [player2, setPlayer2] = useState<IPlayer>()
    //check sessionStorage for playerId,if yes parse it to number,else set it to -2550
    const [playerId, setPlayerId] = useState<number>(sessionStorage.getItem("playerId") ? parseInt(sessionStorage.getItem("playerId")!) : -2550)
    return (
        <GameContext.Provider value={{ room, setRoom, playerId, setPlayerId, board, setBoard, player1, player2 ,setPlayer1,setPlayer2}}>
            {children}
        </GameContext.Provider>
    )
}