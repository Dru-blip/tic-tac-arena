import { useContext } from "react";
import GameContext from "../context";
import Cell from "./cell";


export default function Cells() {
    const {room}=useContext(GameContext)
    return (
        <div className="grid grid-cols-3 gap-4 w-[400px]">
            {
                room!.board!.cells.map((val, index) => (
                    <Cell val={val} index={index} key={index} />
                ))
            }
        </div>
    )
}