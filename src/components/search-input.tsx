import { Command, MagnifyingGlass } from "phosphor-react"
import { useTheme } from "../modules/contexts/theme-context"
import { useState } from "react"

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
    const [isFocused, setIsFocused] = useState(false)
    
    return (
        <div className="relative w-full">
            <MagnifyingGlass className={`absolute left-2 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`} />
            <input 
                type="text" 
                placeholder="Search" 
                className={`w-full ${backgroundColor} outline-none rounded-[8px] ${theme === 'dark' ? 'text-white/20 placeholder:text-white/20' : 'text-black/80 placeholder:text-black/20'} focus:outline-none focus:ring-0 active:outline-none active:ring-0 pr-9 pl-7 py-1 text-sm transition-all duration-300 ${isFocused ? 'border-[1px] border-[#A8C5DA]' : ''}`} 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {showIcon && (
                <>
                    <Command className={`absolute right-4 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`} />
                    <p className={`absolute right-2 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>/</p>
                </>
            )}
        </div>
    )
}