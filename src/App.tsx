import { useState } from 'react';
import './App.css'
import { BackgroundLines } from "./components/ui/background-lines";

function App() {
  const [isOpen, setOpen] = useState(false);
  const openMod = () => {
    isOpen? setOpen(false): setOpen(true);
  }
  const gitInfo = async () => {
    const infoSet = await fetch("https://api.github.com/users/adithya1770/repos");
    const infoSetRev = infoSet.json();
  }
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Doto:wght@100..900&family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Julius+Sans+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Prata&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=download" />
      <h1 className='text-8xl doto-title text-white'>
        Hello{"( '"}Developer{"' )"}
      </h1>
      <h4 className='text-8xl doto-title text-white'>Want a Github Receipt?</h4>
      <p className='text-5xl doto-text text-white mt-10'>Type your username! {"Github one! not instagram"}</p>
      <div className='z-10'>
        <input type="text" className='h-24 text-3xl rounded-4xl doto-text w-96 mt-20 bg-gray-800 z-10' />
        <button onClick={openMod}><span className="material-symbols-outlined text-amber-50 ml-10"><p className='text-5xl'>download</p></span></button>
      </div>
      <div>
        {
          isOpen? <div className="h-160 w-170 backdrop-blur-3xl border-2 border-gray-600 absolute top-4 right-110 z-10 rounded-3xl">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=close" />
          <button className="material-symbols-outlined" onClick={openMod}><p className="text-white z-10 lg:ml-160 lg:mt-3">close</p></button>
          <h1></h1>
      </div>: null
        }
      </div> 
    </BackgroundLines>
  )
}

export default App
