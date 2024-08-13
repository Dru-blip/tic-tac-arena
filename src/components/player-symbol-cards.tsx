import { useContext } from "react"
import GameContext from "../context"
import { Card } from "./ui/card"

export default function PlayerSymbolCards() {
    const { room, playerId } = useContext(GameContext)
    const [player1Id, player2Id] = Object.keys(room?.players!)
    const you = room?.players[playerId === Number.parseInt(player1Id) ? player1Id : player2Id]
    const opponent = room?.players[playerId !== Number.parseInt(player1Id) ? player1Id : player2Id]

    return (
        <div className="flex items-center justify-around gap-4">
            {/* display player symbols  */}
            <Card className="flex items-center justify-between text-white font-semibold w-[200px] p-3" >
                <p className="text-xl font-semibold">You</p>
                <p className={`text-2xl font-bold ${(you?.symbol === "X" ? "text-green-500" : "text-red-500")}`}>{you?.symbol}</p>
            </Card>
            <Card className="flex items-center justify-between text-white font-semibold w-[200px] p-3" >
                <p className="text-xl font-semibold">
                    Opponent
                </p>
                <p className={`text-2xl font-bold ${(opponent?.symbol === "X" ? "text-green-500" : "text-red-500")}`}>{opponent?.symbol}</p>
            </Card>
        </div>

    )
}