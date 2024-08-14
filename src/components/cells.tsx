import { CellProps } from "../types";


interface Props {
    state: string[]
    RenderElement: ({ val, index }: CellProps) => JSX.Element
}

export default function Cells({ state, RenderElement }: Props) {
    // const {room}=useContext(GameContext)
    return (
        <div className="grid grid-cols-3 gap-4 w-[400px]">
            {
                state.map((val, index) => (
                    <RenderElement val={val} index={index} key={index} />
                ))
            }
        </div>
    )
}