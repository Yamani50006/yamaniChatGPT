"use client"
import React from 'react'
import { usePromitStore } from '@/store/usepromitStore'
export default function PromitList() {
  const {promitsList}=usePromitStore();
  console.log(promitsList)
  return (
  <div className='w-full flex items-center justify-center'>

    {
      promitsList.length>0 &&(
 <div className='bg-white/80 shadow-2xl backdrop-blur-md w-full max-w-2xl p-4 rounded-2xl h-120'>
      {
        promitsList.map((item,index)=>(
          <div key={index} className='p-2 border-b border-gray-200 dark:border-gray-700'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-gray-900 dark:text-gray-100 font-semibold ml-1'>{new Date().toLocaleDateString("ar-EG",{hour:"2-digit",hour12:true,minute:"2-digit"})}</span>
              <span className='text-gray-600 dark:text-gray-400 text-sm older-2'>Prompt {index + 1}:</span>
            </div>
            <p className='text-gray-800 dark:text-gray-200 text-right'>{item.promitMessage}</p>
          </div>
        ))
      }
    </div>
      )
    }

   
   

</div>
    
  )
}
