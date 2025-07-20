import { CaretRight } from "phosphor-react"
import { ListType } from "../types/list-type"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { useTheme } from "../../contexts/theme-context"

export const CollapsibleListItem = ({list}:{list:ListType}) => {
    const [caretOpen, setCaretOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const {theme} = useTheme()
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
            <div className="flex rounded-2 py-1 pr-2 w-full">
                {list.subList &&
                    <div className="pl-1">
                        <CaretRight size={16}  className={`text-neutral-500 transition-transform duration-500 ${caretOpen ? "rotate-90" : ""}`} onClick={toggleCaret} />
                    </div>
                }
                <div 
                    className={`flex items-center gap-1 flex-1 cursor-pointer rounded px-1  transition-all duration-200 ${theme === 'dark' ? 'hover:bg-white/15' : 'hover:bg-neutral-100'} ${isActive() ? theme === 'dark' ? 'bg-white/15 border-l border-white border-l-2' : 'bg-neutral-100 border-l border-black border-l-2 ' : ''}`}
                    onClick={handleItemClick}
                >
                    <list.icon size={16} weight="duotone"  />
                    <p className={`text-sm `}>{list.name}</p>
                </div>
                </div>
                {caretOpen && list.subList && (
                    <div className="flex flex-col gap-1">
                        {list.subList?.map((item) => (
                            <div key={item.id} className="flex py-1 pr-2">
                                <p className="text-sm text-neutral-500">{item.name}</p>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}