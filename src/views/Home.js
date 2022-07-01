import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="bg-charcoal w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="mb-28 text-gainsboro text-9xl font-bold flex-none">Tic-Tac-Toe</h1>
            <Link to="/single" className="mb-12 rounded-full bg-red px-5 py-3 hover:bg-hover text-gainsboro shadow-2xl">Singleplayer</Link>
            {
            //<Link to="/multi" className="mb-12 rounded-full bg-red px-5 py-3 hover:bg-hover text-gainsboro shadow-2xl" disabled>Multiplayer</Link>
            }
        </div>
    )
}

export default Home;