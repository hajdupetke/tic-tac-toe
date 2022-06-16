const Square = (props) => {
    return (
        <div className='flex justify-center bg-gainsboro w-11/12 h-0 aspect-w-1 aspect-h-1 shadow-lg rounded-xl'>
            {props.children}
        </div>
    )
} 

export default Square;