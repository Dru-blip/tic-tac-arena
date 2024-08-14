import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";


export default function Home() {
  return (
    <div className="bg-card min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Tic Tac Toe</h1>
      <p className="text-muted-foreground">Challenge your friends or test your skills against the computer.</p>
      <Link to={"/play"}>
        <Button>Start Playing</Button>
      </Link>
    </div>
  );
}
