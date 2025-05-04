
import './App.css'

function App() {

  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-3 max-w-full mx-auto h-[100vh] ">
        <div className="row-span-2 bg-amber-400">1</div>
        <div className='bg-amber-950' >2</div>
        <div className='bg-red-500'>3</div>
        <div className="col-span-2 row-span-3 col-start-2 row-start-2 bg-red-500">6</div>
        <div className="row-span-2 col-start-1 row-start-3 bg-red-500">7</div>
        <div className="row-span-4 col-start-4 row-start-1 bg-red-500">8</div>
        <div className="row-span-2 row-start-5 bg-red-500">9</div>
        <div className="row-start-5 bg-red-500">10</div>
        <div className="col-start-2 row-start-6 bg-red-500">11</div>
        <div className="row-span-2 col-start-3 row-start-5 bg-red-500">12</div>
        <div className="col-start-4 row-start-5 bg-red-500">13</div>
        <div className="col-start-4 row-start-6 bg-red-500">14</div>
    </div>
  )
}

export default App
