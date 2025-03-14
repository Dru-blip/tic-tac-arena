import { useEffect, useState } from "react";



interface Props {
    time: number
}

export default function Timer({ time }: Props) {
    // const { room } = useContext(MultiplayerGameContext)
    const [timeLeft, setTimeLeft] = useState<number | null>(time)
    useEffect(() => {
        if (!timeLeft) return;

        if (timeLeft === 0) {
            setTimeLeft(null)
        }
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timeLeft])
    return (
        <div>Next round starts in {timeLeft}</div>
    )
}