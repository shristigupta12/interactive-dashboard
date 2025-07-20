export const Sidebar = ({direction, isOpen, children, width}:{direction: string; isOpen: boolean; children: React.ReactNode, width: string}) => {
    return (
        <div className={`relative  min-h-screen ${direction==='right'? 'border-l': 'border-r'} border-black/10 transition-all duration-500 ${isOpen ?`${width} `: "w-0" }`}>
            <div className={`fixed h-screen py-5 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out ${isOpen ? `${width} ${direction==="right"? "px-5":"px-4"}`: "w-0"}`}>
                {children}
            </div>
        </div>
    )
}