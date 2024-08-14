import { useContext } from "react"
import { socket } from "../../socket"
import { Button } from "../ui/button"
import {MultiplayerGameContext} from "../../context"
import { CellProps } from "../../types"




export default function Cell({ val, index }: CellProps) {
    const { room, playerId, setRoom } = useContext(MultiplayerGameContext)


    // check player's turn
    const checkPlayerTurn = () => {
        return room?.players[playerId].symbol !== room?.turn
    }

    return (
        // check player's turn ,if yes allow player to make a move ,else disable the button
        <Button disabled={checkPlayerTurn()} onClick={() => {
            // if the cell is empty then make a move
            // else do nothing
            if (!room!.board?.cells[index]) {
                room!.board!.cells[index] = room!.turn
                // update board with next turn and state
                setRoom({ ...room!, turn: room!.turn === "X" ? "O" : "X", board: { ...room?.board!, cells: room?.board?.cells! } })
                // emit event when player is making a move in the room
                // event args : roomId,symbol,position (where player placed his symbol)
                socket.emit("makingMove", { roomId: room?.id, symbol: room?.turn, position: index, playerId })
            }
        }} className="w-28 h-28 text-white font-bold" variant={"outline"} key={index}>
            {/* display X or O */}
            {val ? val === "X" ? <img src={"X.svg"} /> : <img src={"O.svg"} /> : <></>}
        </Button>
    )
}