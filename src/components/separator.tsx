export const Separator = ({direction, color, length}: {direction: "horizontal" | "vertical", color: string, length: string}) => {
    return(
        <div className={`${direction === "horizontal" ? `w-[${length}] h-[1px]` : `h-[${length}] w-[1px]`} bg-${color} `} />
    )
}