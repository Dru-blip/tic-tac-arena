import { Card } from "../ui/card"


interface Props {
    label: string
    score: number
}

// component for score card
// label can be the name of the player or the symbol
// score of the player
export default function ScoreCard({ label, score }: Props) {
    return (
        <Card className="p-3 mr-4 flex items-center justify-between w-[200px]">
            <p className={`text-2xl font-bold ${(label === "X" ? "text-green-500" : "text-red-500")}`}>{label}</p>
            <p className="font-bold text-xl">{score}</p>
        </Card>
    )
}