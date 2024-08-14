import { useContext } from "react";
import { SinglePlayerContext } from "../../context";
import { CellProps } from "../../types";
import { Button } from "../ui/button";
import { checkForDraw, checkWinner, findOptimalMove } from "../../lib/utils";


export default function Cell({ val, index }: CellProps) {
    const { state, setState, turn, setDraw,setDraws,draws, setWinner, setTurn, playerScore, setPlayerScore, aiScore, setAiscore } = useContext(SinglePlayerContext)
    const onCellClicked = () => {

        // if the cell is empty then make a move
        // else do nothing
        if (state[index] !== "") {
            return
        }

        state[index] = turn
        setState([...state])


        let isDraw = checkForDraw(state)
        // console.log(isDraw)
        if (isDraw) {
            setDraw(true)
            setDraws(draws + 1)
            setTimeout(() => {
                setDraw(false)
                setState(Array(9).fill(""))
            }, 2000)
        }

        setTurn(turn === "X" ? "O" : "X")

        let winner = checkWinner(state)
        if (winner) {
            setWinner(winner)
            if (winner === "X") {
                setPlayerScore(playerScore + 1)
            } else {
                setAiscore(aiScore + 1)
            }
            setTimeout(() => {
                setWinner(null)
                setState(Array(9).fill(""))
            }, 2000)
            // const playerScore=room?.players![winner!].score!+1
        } else {
            const move = findOptimalMove(state)
            state[move] = "O"
            setState([...state])
            setTurn("X")

            let winner = checkWinner(state)
            if (winner) {
                setWinner(winner)
                if (winner === "X") {
                    setPlayerScore(playerScore + 1)
                } else {
                    setAiscore(aiScore + 1)
                }
                setTimeout(() => {
                    setWinner(null)
                    setState(Array(9).fill(""))
                }, 2000)
            }
        }

    }
    return (
        // Player symbol will always be X in single player
        // check player's turn ,if yes allow player to make a move ,else disable the button
        <Button disabled={turn !== "X"} className="w-28 h-28 text-white font-bold" variant={"outline"} onClick={onCellClicked}>
            {/* display X or O */}
            {val ? val === "X" ? <img src={"X.svg"} /> : <img src={"O.svg"} /> : <></>}
        </Button>
    )
}