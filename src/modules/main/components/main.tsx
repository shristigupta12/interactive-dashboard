export const Main = ({children}:{children: React.ReactNode}) => {
    return(
        <div className="flex flex-col p-7 gap-7">
            {children}
        </div>
    )
}