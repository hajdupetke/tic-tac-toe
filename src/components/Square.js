const Square = (props) => {
    return (
        <div className='flex flex-1 items-center justify-center bg-gainsboro h-full aspect-square shadow-lg rounded-xl'>
            <h1>{props.children}</h1>
        </div>
    )
} 

export default Square;