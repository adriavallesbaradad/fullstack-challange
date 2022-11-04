import React,{useState} from 'react'
import useFirestore from '../../Hooks/useFirestore';
import toast,{ Toaster } from 'react-hot-toast';

const Upload = () => {
const {addGifData}= useFirestore()
const [linkData, setLinkData] = useState("");
const [tittleData, setiTtleData] = useState("");


const handleUpload = ()=> {
  addGifData("adriavallesbaradad@gmail.com",tittleData,linkData)
  setLinkData("")
  setiTtleData("")
  toast.success("Link Upload")
}

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

      <h2 className="pt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Upload A New File</h2>
      <form action="#" method="POST" className="pt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

    <div>
      
        <div className="mt-1">        
        <input
        onChange = {(e)=> setiTtleData(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Create Tittle"
          value={tittleData}
        />
        </div>
        </div>
        <div>
       <div className="mt-1">
        <input
         onChange = {(e)=> setLinkData(e.target.value)}
          type="text"
          name="tittle"
          id="tittle"
          autoComplete="family-name"
          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"          
          placeholder="Insert URL"
          value={linkData}
        />
        
      </div>
    </div>
      <div className="">
      <button
      onClick={handleUpload}
        type="button"
        className="flex w-full items-center justify-center rounded-md border  dark:bg-blue-200 dark:text-blue-800 py-3 px-8 text-base font-medium text-white hover:dark:bg-blue-800 hover:dark:text-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
        Upload File
      </button>
      </div>
      </form> 
      <Toaster position="top-center" reverseOrder={false} />

    </div>




  )
}

export default Upload