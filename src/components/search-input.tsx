import { Command, MagnifyingGlass } from "phosphor-react"

export const SearchInput = ({
    value,
    onChange,
    showIcon = true,
    backgroundColor = "bg-black/5",
    borderColor = "border-none"
}: {
    value: string;
    onChange: (value: string) => void;
    showIcon?: boolean;
    backgroundColor?: string;
    borderColor?: string;
}) => {
    return (
        <div className="relative">
            <MagnifyingGlass className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input type="text" placeholder="Search" className={`${backgroundColor} ${borderColor} outline-none rounded-[8px] placeholder:text-neutral-400 focus:outline-none focus:ring-0 active:outline-none active:ring-0 pr-2 pl-7 py-1 text-sm`} value={value} onChange={(e) => onChange(e.target.value)} />
            {showIcon && (
                <>
                    <Command className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <p className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400">/</p>
                </>
            )}
        </div>
    )
}