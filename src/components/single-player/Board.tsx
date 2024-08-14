

//Board Component for game with AI

import { useContext } from "react";
import Cells from "../Cells";
import Cell from "./Cell";
import { SinglePlayerContext } from "../../context";
import { Card } from "../ui/card";

interface Props {
    // state:string[]
}

export default function Board({ }: Props) {
    const { state, draw, winner } = useContext(SinglePlayerContext)
    return (
        <div className="min-h-screen flex items-center justify-center">
            {
                draw
                    ? <Card className="text-center font-bold text-4xl p-3">Round Draw</Card>
                    : winner ?<Card className={"text-center font-bold text-4xl p-3"}>{winner} won the round</Card> : <Cells state={state} RenderElement={Cell} />
            }

        </div>
    )
}