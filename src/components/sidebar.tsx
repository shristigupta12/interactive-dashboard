export const Sidebar = ({direction, isOpen, children, width}:{direction: string; isOpen: boolean; children: React.ReactNode, width: string}) => {
    return (
        <div className={`relative py-5 min-h-screen ${direction=='right'? 'border-l': 'border-r'} border-black/10 transition-all duration-500 ${isOpen ?`w-[${width}px] px-4`: "w-0 px-0 " }`}>
            <div className={`fixed h-screen overflow-y-auto transition-all duration-500 ease-in-out ${isOpen ? `w-[${width}px]`: "w-0"}`}>
                {children}
            </div>
        </div>
    )
}