import { useTheme } from "../../../contexts/theme-context"

export const DataContainer = ({headingChild, graphChild}:{headingChild:React.ReactNode, graphChild:React.ReactNode}) => {
    const {theme} = useTheme()
    return(
        <div className={`${theme === 'dark' ? 'bg-white/10' : 'bg-[#F7F9FB]'} p-6 rounded-[16px] flex flex-col gap-4`}>
            <div className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{headingChild}</div>
            {graphChild}
        </div>
    )
}