import { useContext } from "react"
import { socket } from "../socket"
import { Button } from "./ui/button"
import GameContext from "../context"


interface Props {
    val: string
    index: number
}

export default function Cell({ val, index }: Props) {
    const { board, setBoard, room, player1, playerId } = useContext(GameContext)


    // check player's turn
    const checkPlayerTurn = () => {
        return (player1?.playerId === playerId ? "X" : "O") === board?.turn
    }

    return (
        // check player's turn ,if yes allow player to make a move else disable the button
        <Button disabled={!checkPlayerTurn()} onClick={() => {
            // if the cell is empty then make a move
            // else do nothing
            if (!board?.state[index]) {
                board!.state[index] = board!.turn
                // update board with next turn and state
                setBoard({ ...board!, state: board!.state, turn: board!.turn === "X" ? "O" : "X" })
                // emit event when player is making a move in the room
                // event args : roomId,symbol,position (where player placed his symbol)
                socket.emit("player:making-move", { roomId: room?.roomId, symbol: board!.turn, position: index ,playerId})
            }
        }} className="w-28 h-28 text-white font-bold" variant={"outline"} key={index}>
            {/* display X or O */}
            {val ? val === "X" ? <img src={"X.svg"} /> : <img src={"O.svg"} /> : <></>}
        </Button>
    )
}