import { useContext, useEffect, useState } from "react";
import GameContext from "../context";
import { socket } from "../socket";
import Cells from "./cells";
import { Card } from "./ui/card";



export default function Board() {
    const { room, setRoom } = useContext(GameContext)
    const [roundDraw, setRoundDraw] = useState<boolean>(false)


    useEffect(() => {
        socket.on("madeMove", (data) => {
            setRoom(data)
        })

        socket.on("roundDraw", (data) => {
            setRoom(data)
            setRoundDraw(true)
        })

        socket.on("roundWin", (data) => {
            setRoom(data)
        })

        socket.on("roundStart", (data) => {
            setRoundDraw(false)
            setRoom(data)
        })
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-4 text-center font-bold text-2xl my-5">
                <p className="text-orange-400 font-semibold">Round : <span className="">{room?.rounds}</span></p>
                {/* display player's turn */}
                <p className={room?.turn === "O" ? "text-red-500 " : "text-green-500"}>
                    {room?.turn}'s Turn
                </p>
            </div>
            {
                // if draw , show round draw card
                roundDraw
                    ? <Card className="text-center font-bold text-4xl p-3">Round Draw</Card>
                    : (
                        // display winner card if the game is over
                        room?.winner
                            ? <Card className={"text-center font-bold text-4xl p-3"}>{room?.winner} won the round</Card>
                            // display cells if the game is not over or draw
                            : <><Cells /></>
                    )
            }

        </div>
    )
}