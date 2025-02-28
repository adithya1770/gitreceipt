import { useState } from 'react';
import './App.css'
import { cn } from "./lib/utils";
import { BackgroundLines } from "./components/ui/background-lines";

function App() {
  const [isOpen, setOpen] = useState(false);
  const openMod = () => {
    setOpen(true);
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
        <input type="text" className='h-24 text-5xl rounded-4xl doto-text w-96 mt-20 bg-gray-800 z-10' />
        <button onClick={openMod}><span className="material-symbols-outlined text-amber-50 ml-10"><p className='text-5xl'>download</p></span></button>
      </div>
      <div>
        {
          isOpen? <div className="max-w-xs absolute top-30 right-96 mr-64 z-10 w-full group/card">
          <div
            className={cn(
              " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Manu Arora
                </p>
                <p className="text-sm text-gray-400">2 min read</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Author Card
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Card with Author avatar, complete name and time to read - most
                suitable for blogs.
              </p>
            </div>
          </div>
        </div>: null
        }
      </div> 
    </BackgroundLines>
  )
}

export default App
