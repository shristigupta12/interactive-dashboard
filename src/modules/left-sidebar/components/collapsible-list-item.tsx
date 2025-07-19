import { CaretRight } from "phosphor-react"
import { ListType } from "../types/list-type"
import { useState } from "react";

export const CollapsibleListItem = ({list}:{list:ListType}) => {
    const [caretOpen, setCaretOpen] = useState(false);

    const toggleCaret = () => {
        setCaretOpen(caretOpen => !caretOpen)
    }

    return(
        <div className="flex flex-col w-full">
            <div className="flex rounded-2 py-1 pr-2 w-full">
                {list.subList &&
                    <div className="pl-1">
                        <CaretRight size={16}  className={`text-neutral-500 transition-transform duration-500 ${caretOpen ? "rotate-90" : ""}`} onClick={toggleCaret} />
                    </div>
                }
                <div className="flex items-center gap-1 flex-1 ">
                    <list.icon size={16} weight="duotone" className="text-neutral-500" />
                    <p className="text-sm text-neutral-500">{list.name}</p>
                </div>
                </div>
                {caretOpen && list.subList && (
                    <div className="flex flex-col gap-1">
                        {list.subList?.map((item) => (
                            <div key={item.id} className="flex  py-1 pr-2">
                                <p className="text-sm text-neutral-500">{item.name}</p>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}