import Form from "@/components/Form";
import Stock from "@/components/Stock";
import Link from "next/link";

export default function Adminpage() {
  return (
    <div>
      <nav className="border-1 border-black shadow-sm shadow-black flex justify-between items-center h-16 pl-16 pr-16 mb-5 ">
      <h1 className="text-2xl font-bold">Administrador</h1>
      <Link href="/" className="p-2 text-white bg-red-500 rounded">Inicio</Link>
      </nav>
     
      <div className="flex flex-row justify-center w-full px-4 py-5 gap-x-4">
        <Form/>
        <Stock/>
      </div>
    </div>
  )
}
