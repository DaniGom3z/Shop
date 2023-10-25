"use client"
import React, { useContext,useState } from "react";

//se crea el contexto
const MyContext = React.createContext();

// se crea un componente que proporciona el contexto
export const GlobalState = ({ children }) => {
  const [state, setState] = useState([]);
  const [products,setProducts] = useState([
    {nombre:"Manzana",precio:15,rutaImg:"https://imgs.search.brave.com/ZiSrKvcpqa5YQKMnVf_bQsxpWzNcVF94gEiL5ixTbhM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/NDIyNTEyL2VzL2Zv/dG8vbWFuemFuYXMt/cm9qYXMtZnJlc2Nh/cy1zb2JyZS1mb25k/by1ibGFuY28uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU40/TkRDMENsWEtJS293/MThYSlhzV3cxYXVr/SkdRUjlxSHE5TzBV/WHF0eUk9"},
    {nombre:"Platano",precio:10,rutaImg:"https://imgs.search.brave.com/QpzucgepUgKXOAeWhXyhTWudTxg5IkVAbrFk-GZvyE4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29udGFjdG9jb2Np/bmEuY29tL21lZGlh/L3d5c2l3eWcvYmFu/YW5hcy02MTQwOTBf/MTI4MC5qcGc"},
    {nombre:"Mandarina",precio:18,rutaImg:"https://imgs.search.brave.com/wrGoEdgUqelRPPD3HjxDLxpTNBey9d7hy2jKrEXbawQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS5teC9nci9p/bWFnZXMvcHJvZHVj/dC1pbWFnZXMvaW1n/X2xhcmdlLzAwMDAw/MDAwMDAzMDI5TC5q/cGc_b2RuSGVpZ2h0/PTYxMiZvZG5XaWR0/aD02MTImb2RuQmc9/RkZGRkZG"},
    {nombre:"Pera",precio:9,rutaImg:"https://imgs.search.brave.com/n6d2da8NJ6ybKiLu7WzmlOnfROgf762NJF4Je_WVpOA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubGliZXJ0eXBy/aW0uY29tL2ZpbGVz/L3ZhcmlldGVzL3Bv/aXJlLXJvY2hhLWxh/cmdlLmpwZz8xNTY5/MzIwMDY0"},
  ]);

  return (
    <MyContext.Provider value={{state,setState,products,setProducts}}>
      {children}
    </MyContext.Provider>
  );
};

export const contextGlobal = ()=>{
    return useContext(MyContext);
}