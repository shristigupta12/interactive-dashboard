import { ContactsType } from "../../types/contacts-type"

export const ContactItem = ({item}:{item:ContactsType}) => {
    return(
        <div className="p-1 rounded-[8px] flex gap-2">
        <div className=" w-6 h-6 rounded-full bg-neutral-100">
            <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full" />
        </div>
        <div className="flex flex-col">
            <p className="text-overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</p>
        </div>
    </div>
    )
}