export default function Home()
{
  return (
   <div  className=" w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className=" w-full max-w-[700px] sm:justify-center mx-auto p-4">
        <h1 className=" text-5xl text-white mb-4 ">The journal App you need.</h1>
        <p className=" text-2xl text-white/50 mt-2 " >A great journal App that tracks your mood throughout your timeline of journals.</p>
      <div>
      <button className="  text-black/40 p-4 mt-4 border-spacing-3 bg-lime-300 border-none  rounded-md text-xl font-mono">get started</button>
      </div>
      </div>
   </div>
  )
}
