import { useTheme } from "../../../contexts/theme-context"

export const DataContainer = ({headingChild, graphChild, legendChild, justifyCenter=false}:{headingChild:React.ReactNode, graphChild:React.ReactNode, legendChild?:React.ReactNode, justifyCenter?:boolean}) => {
    const {theme} = useTheme()
    return(
        <div className={`${theme === 'dark' ? 'bg-white/5' : 'bg-[#F7F9FB]'} p-4 sm:p-6 rounded-[16px] flex flex-col gap-4 ${justifyCenter ? 'justify-center': "justify-start"}`}>
            <div className={`${theme === 'dark' ? 'text-white' : 'text-black'} flex items-center gap-4`}>
                {headingChild}
                {legendChild && (
                    <>
                        <div className="w-px h-4 bg-gray-300"></div>
                        {legendChild}
                    </>
                )}
            </div>
            {graphChild}
        </div>
    )
}