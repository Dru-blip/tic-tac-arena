import { useContext, useEffect } from "react"
import GameContext from "../context"
import { socket } from "../socket"
import Board from "./board"
import { ClipboardIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { toast } from "sonner"
import PlayerSymbolCards from "./player-symbol-cards"
import PlayerScoreCards from "./player-score-cards"


export default function Room() {
    const { room, playerId, setRoom } = useContext(GameContext)

    useEffect(() => {
        // emit event when both players joined in the room
        // if (room?.totalPlayers === 2) {
        //     socket.emit("startGame", { roomId: room?.id, playerIds: Object.keys(room?.players) })
        // }

        // event listener for start game
        socket.on("gameStarted", (data) => {
            setRoom(data)
            toast.success("Game Started")
        })

        // event listener for player joined
        socket.on("playerJoined", (data) => {
            setRoom(data)
        })

        // event listener for player left
        socket.on("player:disconnected", (data) => {
            console.log(data)
        })

    }, [])


    return (
        <div className="w-full">
            <h1 className="text-white  text-md absolute top-0 left-0 p-2 flex items-center">
                {/* display room id */}
                Room Id: <span className="ml-3 font-bold">{room?.id}</span>

                {/* Button for copying room Id */}
                <Button className="ml-2" size={"icon"} variant={"outline"} onClick={() => {
                    //copy room id to clipboard
                    navigator.clipboard.writeText(room?.id!)
                    toast.success("Room Id Copied to clipboard")
                }} ><ClipboardIcon className="w-5 h-5" />
                </Button>
            </h1>
            <div className="w-full">
                {/* display player id */}
                <p className="text-white absolute top-10 left-0 p-2">player Id : <span className="font-bold">{playerId}</span></p>


                {/* check if player1 and player2 are online, if yes then show board else show waiting message*/}
                {
                    room?.totalPlayers !== 2
                        ? <div className="text-white font-bold text-center text-2xl">Waiting for other player</div>
                        : (
                            <div>
                                <PlayerSymbolCards />
                                <Board />
                                <PlayerScoreCards />
                            </div>
                        )
                }


                {/* {(player1?.online && player2?.online && room!.startGame) ? <Board /> :
                    <div className="text-center">
                        <p className="text-white text-3xl font-semibold">waiting for other player</p>
                        <p className="text-gray-400 font-bold">share the above room id with other player</p>
                    </div>} */}
            </div>
        </div>
    )
}