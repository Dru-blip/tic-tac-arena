import { useContext, useEffect } from "react"
import GameContext from "../context"
import { socket } from "../socket"
import Board from "./board"
import { ClipboardIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { toast } from "sonner"


export default function Room() {
    const { room, setRoom, playerId, player1, player2, setPlayer1, setPlayer2, setBoard } = useContext(GameContext)

    useEffect(() => {
        // emit event when both players joined in the room
        if (player1 && player2) {
            socket.emit("room:start-game-request", { roomId: room?.roomId })
        }

        // event listener for start game
        socket.on("room:start-game", (data) => {
            setBoard(data.board)
            setRoom({ roomId: data.roomId, startGame: data.startGame })
            setPlayer1(data.player1)
            setPlayer2(data.player2)
            toast.success("Game Started")
        })

        // broadcast event listener for player joined
        socket.on("broadcast:room:player-joined", (data) => {
            if (data.joinedPlayer === "player1") {
                setPlayer1(data.player1)
            } else {
                setPlayer2(data.player2)
            }
        })

        // event listener for player joined
        socket.on("room:player-joined", (data) => {
            if (data.joinedPlayer === "player1") {
                setPlayer1(data.player1)
            } else {
                setPlayer2(data.player2)
            }
        })

        // event listener for player left
        socket.on("player:disconnected", (data) => {
            console.log(data)
        })

        // event listener for room info
        socket.on("room:room-info", (data) => {
            setRoom(data)
        })
    }, [])


    return (
        <div className="w-full">
            <h1 className="text-white  text-md absolute top-0 left-0 p-2 flex items-center">
                {/* display room id */}
                Room Id: <span className="ml-3 font-bold">{room?.roomId}</span>

                {/* Button for copying room Id */}
                <Button className="ml-2" size={"icon"} variant={"outline"} onClick={() => {
                    //copy room id to clipboard
                    navigator.clipboard.writeText(room?.roomId!)
                    toast.success("Room Id Copied to clipboard")
                }} ><ClipboardIcon className="w-5 h-5" />
                </Button>
            </h1>
            <div className="w-full">
                {/* display player id */}
                <p className="text-white absolute top-10 left-0 p-2">player Id : <span className="font-bold">{playerId}</span></p>
                
                {
                    /* display player symbol */
                    (room && (player1 && player2))
                        ? (<div className="flex items-center justify-center text-white font-semibold w-full">
                            You are
                            <p className="ml-2 text-2xl font-bold">
                                {playerId === player1.playerId ? player1.symbol : player2.symbol}
                            </p>
                        </div>)
                        : <></>
                }

                {/* check if player1 and player2 are online,if yes then show board then show waiting*/}
                {(player1?.online && player2?.online && room!.startGame) ? <Board /> :
                    <div className="text-center">
                        <p className="text-white text-3xl font-semibold">waiting for other player</p>
                        <p className="text-gray-400 font-bold">share the above room id with other player</p>
                    </div>}
            </div>
        </div>
    )
}