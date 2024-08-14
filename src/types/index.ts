import React from "react";

// Prop types for Cell Element
export interface CellProps{
  val:string
  index:number
}


// Store state of the game when playing against computer
export interface SinglePlayerGameContextProps{
  state:string[]
  turn:"X"|"O"
  draw:boolean
  winner:string|null
  draws:number
  playerScore:number
  aiScore:number

  setDraws:React.Dispatch<React.SetStateAction<number>>
  setDraw:React.Dispatch<React.SetStateAction<boolean>>
  setWinner:React.Dispatch<React.SetStateAction<string|null>>
  setTurn:React.Dispatch<React.SetStateAction<"X"|"O">>
  setState:React.Dispatch<React.SetStateAction<string[]>>
  setPlayerScore:React.Dispatch<React.SetStateAction<number>>
  setAiscore:React.Dispatch<React.SetStateAction<number>>
}

// Store state of the game when Playing against another player
export interface MultiplayerGameContextProps {
  playerId: string;
  room: IRoom | undefined;
  setPlayerId: React.Dispatch<React.SetStateAction<string>>;
  setRoom: React.Dispatch<React.SetStateAction<IRoom | undefined>>;
}

// Type of player object
export interface IPlayer {
  roomId: string;
  id: string;
  symbol: string;
  online: boolean;
  score: number;
}

// Type for Players Object
// key is player id
// value is player object
type Players = { [key: string]: IPlayer };


// Type for Room Object
export interface IRoom {
  id: string;
  startGame: boolean;
  players: Players;
  gameStarted: boolean;
  gameEnded: boolean;
  board: IBoard;
  draws: number;
  rounds:number;
  turn: "X" | "O";
  totalPlayers: number;
  winner: string | null;
}

// Type for Board Object
export interface IBoard {
  roomId: string;
  cells: string[];
}
