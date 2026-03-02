import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


function Problem (){




    return(
        <>
        <div className="min-h-screen  mt-10 p-4 ">
            

            <div >
          
            <section className="relative bg-linear-to-tr rounded-2xl lg:pb-7  from-pink-600/50 to-purple-600/90 ">
           
             
                        <div className="lg:grid grid-cols-2 gap-20  w-full">
                            <div className="lg:flex flex-col ">
        <h1 className="lg:max-w-full prob max-w-md text-4xl p-7 text-white lg:text-6xl lg:p-14 font-medium z-10">Designed to Help you do More — <br /><span className="text-white/50">with No <br />Burnout</span> </h1>
                             <p className="max-w-lg text-xl text-white/50 lg:px-14 px-6  lg:-mt-8">Pulse eliminates guesswork by transforming raw signals into actionable insights — so teams move faster, smarter, and with zero chaos.</p>
                             <Link
  href="/about"
  className="inline-flex items-center gap-2 py-4 max-w-sm lg:px-14 px-7 lg:text-2xl text-xl text-white/60  font-medium 
  hover:gap-3 transition-all duration-300"
>
  Learn more
  <ArrowRight size={22} />
</Link>

        </div>
        <div className="rounded-2xl ">
             <Image className=" shadow-2xl lg:p-4 rounded-2xl " src="/images/problempic.png" alt="none" height={100} width={900}></Image>
             </div>



        </div>
      

        
        </section>

       

        </div>

    </div>
    
        </>
    )
}
export default Problem