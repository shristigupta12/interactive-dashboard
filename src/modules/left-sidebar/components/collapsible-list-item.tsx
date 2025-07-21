import { CaretRight } from "phosphor-react"
import { ListType } from "../types/list-type"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { useTheme } from "../../contexts/theme-context"

export const SubListItem = ({item, theme}:{item:{id:string; name: string}, theme:string}) => {
    const [hovered, setHovered] = useState(false)
    return(
        <div className={`flex gap-2 items-center rounded-[8px] py-1 pr-2 w-full ${theme === 'dark' ? 'hover:bg-white/15' : 'hover:bg-neutral-100'} cursor-pointer`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="flex items-center">
                <div className={`w-1 h-4 rounded-full ${hovered ? theme === 'dark' ? 'bg-white' : 'bg-black' : 'bg-transparent'}`}></div>
                <div className="size-4"></div>
            </div>
            <p className="text-sm truncate w-full min-w-0">{item.name}</p>
        </div>
    )
}

export const CollapsibleListItem = ({list}:{list:ListType}) => {
    const [caretOpen, setCaretOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const {theme} = useTheme()
    const [hovered, setHovered] = useState(false)
    const toggleCaret = () => {
        setCaretOpen(caretOpen => !caretOpen)
    }

    const handleItemClick = () => {
        if (list.id === 'default') {
            navigate('/dashboard/default')
        } else if (list.id === 'order-list') {
            navigate('/dashboard/order-list')
        }
    }

    const isActive = () => {
        if (list.id === 'default') {
            return currentPath === '/dashboard/default' || currentPath === '/'
        } else if (list.id === 'order-list') {
            return currentPath === '/dashboard/order-list'
        }
        return false
    }

    return(
        <div className="flex flex-col w-full">
            <div className={`flex items-center rounded-[8px] py-1 pr-2 w-full ${theme === 'dark' ? 'hover:bg-white/15' : 'hover:bg-neutral-100'} ${isActive() ? theme === 'dark' ? 'bg-white/15' : 'bg-neutral-100' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="flex items-center">
                    <div className={`w-1 h-4 rounded-full ${isActive() || hovered ? theme === 'dark' ? 'bg-white' : 'bg-black' : 'bg-transparent'}`}></div>
                    <div className="size-4"></div>
                </div>
                {list.subList &&
                    <div className="pl-1 cursor-pointer">
                        <CaretRight size={14}  className={`text-neutral-400 transition-transform duration-500 ${caretOpen ? "rotate-90" : ""}`} onClick={toggleCaret} />
                    </div>
                }
                <div 
                    className={`flex items-center gap-1 flex-1 cursor-pointer rounded-[8px] px-1  transition-all duration-200`}
                    onClick={handleItemClick}
                >
                    <list.icon size={16} weight="duotone"  />
                    <p className={`text-sm `}>{list.name}</p>
                </div>
                </div>
                {caretOpen && list.subList && (
                    <div className="flex flex-col gap-1 pl-8">
                        {list.subList?.map((item) => (
                            <SubListItem key={item.id} item={item} theme={theme} />
                        ))}
                    </div>
                )}
        </div>
    )
}