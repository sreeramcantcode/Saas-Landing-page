"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Herobtn from "./Herobtn"

function Hero(){

    const hero = useRef(null)
    const para = useRef(null)

   useGSAP(()=>{
    gsap.from([hero.current , para.current] ,{
        yPercent:10,
        duration:1,
        
        filter:"blur(10px)"
    })
   })

    return(

        <>
       
        <div ref={hero}  className="flex justify-center items-center rounded-b-full  min-h-screen bg-linear-to-t from-pink-600/40 to-purple-600/90   ">
        
            <div  className=" lg:pt-20  text-white   text-center   ">
                <h1 className="hero lg:text-8xl text-6xl">
      Your workflows. <br />
      Smarter. Faster. <br /> Automatic.
    </h1>

       <section ref={para} className="text-black/50  p-4  lg:text-lg text-sm w-full  flex justify-center ">
        <p className="max-w-xl p-4 ">Pulse is the intelligent workflow platform built for ambitious teams. Automate faster, collaborate smarter, and scale without the chaos.</p>
       
       </section>
             <Herobtn></Herobtn>
        
        </div>

        
    
        </div>

     </>
    )

}
export default Hero