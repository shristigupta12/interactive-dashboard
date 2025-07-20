export const DataContainer = ({headingChild, graphChild}:{headingChild:React.ReactNode, graphChild:React.ReactNode}) => {
    return(
        <div className='bg-[#F7F9FB] p-6 rounded-[16px] flex flex-col gap-4'>
            <div>{headingChild}</div>
            {graphChild}
        </div>
    )
}