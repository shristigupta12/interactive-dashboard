import { Command, MagnifyingGlass } from "phosphor-react"
import { useTheme } from "../modules/contexts/theme-context"

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
    const {theme} = useTheme()
    return (
        <div className="relative w-full">
            <MagnifyingGlass className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input type="text" placeholder="Search" className={`w-full ${backgroundColor} ${borderColor} outline-none rounded-[8px] ${theme === 'dark' ? 'text-white' : 'text-black'} placeholder:text-neutral-400 focus:outline-none focus:ring-0 active:outline-none active:ring-0 pr-2 pl-7 py-1 text-sm`} value={value} onChange={(e) => onChange(e.target.value)} />
            {showIcon && (
                <>
                    <Command className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <p className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400">/</p>
                </>
            )}
        </div>
    )
}