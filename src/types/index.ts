export interface GameContextProps {
  playerId: number;
  room: IRoom | undefined;
  setPlayerId: React.Dispatch<React.SetStateAction<number>>;
  setRoom: React.Dispatch<React.SetStateAction<IRoom | undefined>>;
}

export interface IPlayer {
  roomId: string;
  id: string;
  symbol: string;
  online: boolean;
  score: number;
}

type Players = { [key: string]: IPlayer };

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

export interface IBoard {
  roomId: string;
  cells: string[];
}
