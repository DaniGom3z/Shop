"use client"
import Link from "next/link"
import Cart from "./Cart"
export default function Navbar() {
  return (
    <nav className="border-1 border-black shadow-sm shadow-black flex justify-between items-center h-16 pl-16 mb-5 pr-5">
        <h1 className="text-2xl font-bold">SHOP</h1>
        <div className="flex flex-row items-center gap-x-10">
            <Link href={"/admin"} className="p-2 bg-blue-500 rounded">Admin</Link>
            <Cart/>
        </div>
    </nav>
  )
}
