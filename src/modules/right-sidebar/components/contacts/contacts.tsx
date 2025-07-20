import { Heading } from "../heading"
import { ContactsData } from "../../data/contacts.data"
import { ContactItem } from "./contacts-item"

export const Contacts = () => {
    return(
        <div className="flex flex-col gap-2">
            <Heading title="Contacts" />
            <div className="flex flex-col gap-2">
                {ContactsData.map((item) => (
                    <ContactItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}