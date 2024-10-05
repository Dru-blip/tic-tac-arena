//Board Component for game with AI
import { useContext } from "react";
import Cells from "../Cells";
import Cell from "./Cell";
import { SinglePlayerContext } from "../../context";
import { Card } from "../ui/card";



export default function Board() {
    const { state, draw, winner,turn } = useContext(SinglePlayerContext)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-2xl mb-4">
                <p className={turn === "O" ? "text-red-500 " : "text-green-500"}>
                    {turn}'s Turn
                </p>
            </div>
            {
                draw
                    ? <Card className="text-center font-bold text-4xl p-3">Round Draw</Card>
                    : ( winner
                        ? <Card className={"text-center font-bold text-4xl p-3"}>{winner} won the round</Card>
                        : <Cells state={state} RenderElement={Cell} />
                        )
            }

        </div>
    )
}