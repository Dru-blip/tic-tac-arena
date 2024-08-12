import { useContext, useEffect } from "react";
import GameContext from "../context";
import { socket } from "../socket";
import Cells from "./cells";
import { Card, CardTitle } from "./ui/card";



export default function Board() {
    const { board, setBoard, room, player1, player2, playerId, setPlayer1, setPlayer2 } = useContext(GameContext)

    useEffect(() => {

        socket.on("room:round-start", (data) => {
            setBoard({ ...data.board })
        })

        // event listener for when player  made a move
        socket.on("player:made-move", (data) => {
            setBoard({ ...data.board })
        })

        // event listener for match draw
        socket.on("room:match-draw", (data) => {
            setBoard({ ...data.board })
            setTimeout(() => {
                socket.emit("room:round-reset", { roomId: room?.roomId })
            }, 3000)

        })

        socket.on("room:match-win", (data) => {
            if (data.playerId === player1?.playerId) {
                setPlayer1({ ...player1!, score: player1!.score + 1 })
            }
            if (data.playerId === player2?.playerId) {
                setPlayer2({ ...player2!, score: player2!.score + 1 })
            }
            setBoard({ ...data.board })
            setTimeout(() => {
                socket.emit("room:round-reset", { roomId: room?.roomId })
            }, 3000)

        })

    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center font-bold text-2xl">
                {/* display player's turn */}
                <p className={board?.turn === "O" ? "text-red-500 " : "text-green-500"}>
                    {board?.turn}'s Turn
                </p>
            </div>
            {/* display winner */}
            {
                board?.winner ? <Card className={"text-center font-bold text-4xl p-3"}>{board?.winner} won the round</Card> : <></>
            }
            {/* display draw */}
            {
                board?.draw ? <Card className="text-center font-bold text-4xl p-3">Match Draw</Card> : <> </>
            }
            {/* display cells if the game is not over */}
            {board?.winner || board?.draw ? <></> : <Cells />}
            <div className="mt-4">
                <p className="text-center font-bold text-2xl text-white mb-4">Scores</p>
                <div className="flex items-center">
                    <Card className="p-3 mr-4 flex items-center justify-between w-[100px]">
                        <p className={`text-2xl font-bold ${(player1?.symbol === "X" ? "text-green-500" : "text-red-500")}`}>{player1?.symbol}</p>
                        <p className="font-bold text-xl">{player1?.score}</p>
                    </Card>
                    <Card className="p-3 mr-4 flex items-center justify-between w-[100px]">
                        <p className={`text-2xl font-bold ${(player2?.symbol === "X" ? "text-green-500" : "text-red-500")}`}>{player2?.symbol}</p>
                        <p className="font-bold text-xl">{player2?.score}</p>
                    </Card>
                </div>
            </div>

        </div>

    )
}