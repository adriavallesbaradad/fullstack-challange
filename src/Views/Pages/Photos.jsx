import React from 'react'
import { Switch } from '@headlessui/react'

function Photos() {
  return (
    <div>
       <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
             
              <div className="mt-1">
                <input
                  type="text"
                  name="Name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              
              <div className="mt-1">
                <input
                
                  type="text"
                  name="Link"
                  id="link"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border  dark:bg-blue-200 dark:text-blue-800 py-3 px-8 text-base font-medium text-white hover:dark:bg-blue-800 hover:dark:text-blue-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Say Hello!
              </button>
            </div>
          </form> 
    </div>
  )
}

export default Photos


