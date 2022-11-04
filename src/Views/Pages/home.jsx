import React, {useEffect, useState} from "react";
import { MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/20/solid'
import useFirestore from "../../Hooks/useFirestore";
import toast,{ Toaster } from 'react-hot-toast';





function Home() {
const [searchTerm, setSearchTerm] = useState("");
const {getGifsData,deleteGifData} = useFirestore();
const [memeData, setmemeData] = useState([]);

useEffect (() => {
    getGifsData('adriavallesbaradad@gmail.com').then((data) => {
    setmemeData (data);
    })
},[])

const deleteGif = (src,title) => {
  deleteGifData("adriavallesbaradad@gmail.com", title, src)
  setTimeout(()=>{
    getGifsData('adriavallesbaradad@gmail.com').then((data) => {
      setmemeData (data);
    })
    toast.success("Meme deleted succesfully")
  },1000)
}

  return (

    <div>
<div className="w-full bg-white mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div><div className="w-full pt-6">

      <div>
      
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} 
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Search</span>
        </button>
      </div>
    </div>
      </div>
      </div>
    <div className="">
      <div className="grid grid-cols-4 gap-2 justify-items-center">
      {
          memeData.map((val,index) => {
            return(
              <div className="">
     
              <div className=" pb-8 mx-4 pt-8 template" key={index}>
                  <img className="w-48  h-48 object-cover shadow-lg rounded-lg" src={val.src} alt="" />
                  <div className="justify-items-center">
                  <h3 className="text-center">{val.title}</h3>
                  
                  <button 
                  className="shadow-lg  place-items-center  rounded-md border border-transparent dark:bg-red-400 dark:text-white py-2 mt-4 px-2 text-base font-medium text-white hover:dark:bg-red-500 hover:dark:text-white focus:outline-none "
                  onClick={()=>deleteGif(val.src,val.title)}>Delete</button>
                  </div>
              </div> 
              </div> 
              
            )
          })
          }

      </div>
    </div>
    </div>





    <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Home