import Link from 'next/link'
import { auth } from '@clerk/nextjs'
export default  async function Home()
  
{
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'
  return (
    <section className='bg-black w-screen h-screen items-center justify-center '>

   
   <div className=' mx-auto pt-10 text-center'><h1 className=" text-7xl  font-montserrat font-extrabold text-sky-400/70">Mood diary </h1></div>
      <div className=" w-full max-w-[700px] sm:justify-center mx-auto p-10 mt-10 align-middle bg-black">
        <h1 className=" text-5xl text-white mb-4 font-light font-nunitosans ">The journal App you need.</h1>
        <p className=" text-2xl text-white/50 mt-2 font-nunitosans " >A great journal App that tracks your mood throughout your timeline of journals.</p>
      <div>
      <Link href={href}>
      <button className="  text-black/40 p-4 mt-4 border-spacing-3 bg-lime-300 border-none  rounded-md text-xl font-mono">get started</button>
      </Link>
      </div>
      </div>
   
   </section>
  )
}
