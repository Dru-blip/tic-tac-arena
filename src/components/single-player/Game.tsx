import { useContext } from "react"
import { SinglePlayerContext } from "../../context"
import { Card } from "../ui/card"
import Board from "./Board"
import ScoreCard from "./ScoreCard"



export default function SinglePlayerGame() {
    const { playerScore, aiScore,draws } = useContext(SinglePlayerContext)

    return (
        <div className="w-full grid grid-cols-1 gap-4">
            <div className="w-full flex items-center justify-around gap-4">
                {/* display player symbols  */}
                <Card className="flex items-center justify-between text-white font-semibold w-[200px] p-3" >
                    <p className="text-xl font-semibold">You</p>
                    <p className={`text-2xl font-bold "text-green-500"`}>X</p>
                </Card>
                <Card className="flex items-center justify-between text-white font-semibold w-[200px] p-3" >
                    <p className="text-xl font-semibold">
                        Opponent
                    </p>
                    <p className={`text-2xl font-bold "text-red-500"`}>O</p>
                </Card>
            </div>
            <Board />
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center">
                    <ScoreCard label="X" score={playerScore} />
                    <ScoreCard label="O" score={aiScore} />
                </div>
                <ScoreCard label="draws" score={draws}/>
            </div>
        </div>
    )
}