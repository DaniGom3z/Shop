"use client"

import { contextGlobal } from "./contextoGlobal"
import Articulo from "./Articulo";
export default function ListProducts() {
    const{state} = contextGlobal();
  return (
    <div className="absolute flex flex-col h-64 overflow-y-auto top-[4rem] right-4 w-64 gap-y-3 border-solid border border-black " >
         {
            state.map((e,i)=>{
                return <Articulo producto={e} key={i}/>
            })
         }
    </div>
  )
}
