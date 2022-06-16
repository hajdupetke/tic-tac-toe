const Square = (props) => {
    return (
        <div className='mt-4 text-center bg-gainsboro w-full h-0 shadow-lg pb-full rounded-xl text-8xl'>
            {props.children}
        </div>
    )
} 

export default Square;