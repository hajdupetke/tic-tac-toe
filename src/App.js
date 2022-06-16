import "./index.css"
import Table from "./components/Table.js"

const App = () => {
  return (
    <div className='bg-charcoal w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className="mb-28 text-gainsboro text-4xl font-bold flex-none">Tic-Tac-Toe</h1>
      <Table />
    </div>
  );
}
export default App;
