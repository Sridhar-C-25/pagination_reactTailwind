import { useState } from "react/cjs/react.development"

const Pagination = () =>
{
   let [num, setNum] = useState(1)
   let [cur, setCur] = useState(1)

   const pages = [
      { page: num },
      { page: num + 1 },
      { page: num + 2 },
      { page: num + 3 },
   ]
   function Next ()
   {
      setNum(++num)
   }
   function back ()
   {
      num > 1 && setNum(--num)
   }
   return (
      <div className="flex bg-white rounded-lg font-[Poppins]">
         <button onClick={back} className="h-12 border-2 border-r-0 border-indigo-600
               px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
         </button>
         {
            pages.map((pg, i) => (
               <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-indigo-600
               w-12 ${cur === pg.page && 'bg-indigo-600 text-white'}`}>{pg.page}</button>
            ))
         }
         <button onClick={Next} className="h-12 border-2  border-indigo-600
               px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
         </button>
      </div>
   )
}

export default Pagination
