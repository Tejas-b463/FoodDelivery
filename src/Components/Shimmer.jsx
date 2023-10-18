

const Shimmer= () =>{
   
    return(

      <div data-testid='shimmer' className="my-10 flex flex-wrap gap-7 justify-center mx-8">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className=" animate-pulse w-56 h-80 flex flex-wrap" key={index}>
           <div className="border shadow rounded-md p-4 max-w-sm  w-full mx-auto mb-8">
         <div className="animate-pulse flex space-x-4">
           <div className="rounded-full bg-slate-200 h-10 w-10"></div>
           <div className="flex-1 space-y-6 py-1">
             <div className="h-2 bg-slate-200 rounded"></div>
             <div className="space-y-3">
               <div className="grid grid-cols-3 gap-4">
                 <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                 <div className="h-2 bg-slate-200 rounded col-span-1"></div>
               </div>
               <div className="h-2 bg-slate-200 rounded"></div>
             </div>
           </div>
         </div>
       </div>
          </div>
        ))}
    </div>
    )
}
export default Shimmer;