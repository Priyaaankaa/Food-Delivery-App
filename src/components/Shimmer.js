export const Shimmer =() =>{
    return(
        <div className="flex flex-wrap mx-16 justify-center">
        {Array(10).fill("").map((e, index)=>
            (<div key={index} className="h-80 w-48 m-7 z-10 rounded-md bg-slate-200">
        </div>))}
    </div>
)}