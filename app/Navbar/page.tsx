import Link from "next/link"


function Navbar (){
    
    return (
        <>
        <nav className="max-w-full  fixed backdrop-blur-2xl  z-20 w-full p-6  lg:flex items-center justify-between ">
           
           <div>
            <h1 className="lg:text-4xl text-2xl prob lg:block text-blue-950">
               Pulse
            </h1>
           </div>

               <div className="p-4  rounded-3xl hidden lg:block text-black bg-white/60">
              <ul className="flex gap-8  ">
                <Link href="/Hero" className="  hover:bg-purple-600/70 duration-200 rounded-xl px-2 py-1" >Home</Link>
                <Link href="#" className="hover:bg-purple-600/70 duration-200 rounded-xl px-2 py-1" >About</Link>
                <Link href="#" className="hover:bg-purple-600/70 duration-200 rounded-xl px-2 py-1" >Feature</Link>
                <Link href="#" className="hover:bg-purple-600/70 duration-200 rounded-xl px-2 py-1" >Pricing</Link>
                <Link href="#" className="hover:bg-purple-600/70 duration-200 rounded-xl px-2 py-1" >Integration</Link>
                <Link href="#" className="hover:bg-purple-600/70 duration-200 rounded-xl px-2 py-1" >Blog</Link>
              </ul>
              </div>
              
           <div className=" hidden lg:block bg-purple-600/70 hover:bg-purple-700 duration-200 rounded-2xl px-12 p-2">
              <button>Contact</button>
           </div>

        </nav>
        </>
    )

}

export default Navbar