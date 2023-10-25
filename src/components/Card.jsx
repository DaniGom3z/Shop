"use client";
import { useEffect, useState } from "react";
import { contextGlobal } from "./contextoGlobal";

export default function Card({ producto }) {
  const { setState, state } = contextGlobal();
  const [cantidad1, setCantidad] = useState(1);

  const handleAdd = () => {
    // Verificamos si existe el producto en el arreglo.
    const productoExistente = state.find((e) => e.nombre === producto.nombre);

    // Si el producto existe, incrementamos su cantidad.
    if (productoExistente) {
      productoExistente.cantidad += cantidad1;
      setState([...state]);
    } else {
      // Si el producto no existe, lo agregamos al arreglo con la cantidad especificada.
      producto = { ...producto, cantidad: cantidad1 };
      setState([...state, producto]);
    }
  };

  return (
    <div className="flex flex-col items-center h-80 w-64 p-2 rounded border-solid border-2 border-black ">
      <img src={producto.rutaImg} alt="" className="w-32 h-32 bg-whit mb-5" />
      <p className="w-full mb-2 text-left">Nombre:{producto.nombre}</p>
      <p className="w-full mb-4 text-leftr">Precio:${producto.precio}</p>
      <button
        className="p-1 mt-5 text-black bg-green-400 rounded-sm"
        onClick={handleAdd}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
