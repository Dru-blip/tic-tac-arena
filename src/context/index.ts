import { createContext } from "react"
import { GameContextProps } from "../types"


const GameContext=createContext<GameContextProps>({} as GameContextProps)

export default GameContext