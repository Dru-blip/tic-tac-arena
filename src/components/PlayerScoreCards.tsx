import { useContext } from "react"
import {MultiplayerGameContext} from "../context"
import { Card } from "./ui/card"


export default function PlayerScoreCards() {
    const { room } = useContext(MultiplayerGameContext)
    const [player1Id, player2Id] = Object.keys(room?.players!)
    const player1 = room?.players[player1Id]
    const player2 = room?.players[player2Id]

    return (
        <div className="mt-4 grid grid-cols-1 gap-4">
            <p className="text-center font-bold text-2xl text-white">Scores</p>
            <div className="flex items-center justify-center w-full">
                <Card className="p-3 mr-4 flex items-center justify-between w-[150px]">
                    <p className={`text-2xl font-bold ${(player1?.symbol === "X" ? "text-green-500" : "text-red-500")}`}>{player1?.symbol}</p>
                    <p className="font-bold text-xl">{player1?.score}</p>
                </Card>
                <Card className="p-3 mr-4 flex items-center justify-between w-[150px]">
                    <p className={`text-2xl font-bold ${(player2?.symbol === "X" ? "text-green-500" : "text-red-500")}`}>{player2?.symbol}</p>
                    <p className="font-bold text-xl">{player2?.score}</p>
                </Card>
            </div>
            <div className="flex items-center justify-center">
                <Card className="p-3  flex items-center justify-between w-[150px]">
                    <p className="text-blue-400 font-bold text-2xl">Draws</p>
                    <p className="font-bold text-xl">{room?.draws}</p>
                </Card>
            </div>
        </div>
    )
}