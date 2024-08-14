import { useState } from "react";
import { SinglePlayerContext } from "../../context";
import { IRoom } from "../../types";


interface Props {
    children: React.ReactNode
}

export default function SinglePlayerGameProvider({ children }: Props) {
    const [state,setState]=useState<string[]>(Array(9).fill(""))
    const [turn,setTurn]=useState<"X"|"O">("X")
    const [draw,setDraw]=useState<boolean>(false)
    const [draws,setDraws]=useState<number>(0)
    const [winner,setWinner]=useState<string|null>(null)
    const [playerScore,setPlayerScore]=useState<number>(0)
    const [aiScore,setAiscore]=useState<number>(0)
    return (
        <SinglePlayerContext.Provider value={{state,setState,turn,setTurn,draw,setDraw,draws,setDraws,winner,setWinner,playerScore,setPlayerScore,aiScore,setAiscore }}>
            {children}
        </SinglePlayerContext.Provider>
    )
}