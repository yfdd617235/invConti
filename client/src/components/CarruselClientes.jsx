import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function CarruselClientes() {
    const items = [
        {
            img: "imagen1.jpg", // Asegúrate de que estas imágenes estén disponibles en tu proyecto
            text: "Compromiso de calidad en cada servicio ofrecido.",
        },
        {
            img: "imagen2.jpg",
            text: "Garantía de satisfacción en cada proyecto.",
        },
        {
            img: "imagen3.jpg",
            text: "Atención personalizada y compromiso constante.",
        },
        {
            img: "imagen4.jpg",
            text: "Atención personalizada y compromiso constante.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar al siguiente item automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="bg-slate-100 p-8">
            <div className="container md:mx-10 flex flex-col md:flex-row gap-8 justify-center items-center">
                {/* Columna izquierda */}
                <div className="md:w-1/4 w-full text-center md:text-left">
                    <h2 className="text-2xl font-bold text-blue-900">Nuestros Clientes</h2>
                </div>

                {/* Columna derecha (Carrusel) */}
                <div className="md:w-3/4 w-full relative">
                    <div className="relative overflow-hidden">
                        {/* Contenedor del item actual */}
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full flex justify-center items-center p-4 bg-white rounded-lg shadow-md"
                                >
                                    <img
                                        src={item.img}
                                        alt={`Imagen ${index + 1}`}
                                        className="w-16 h-16 mr-4 rounded-full object-cover"
                                    />
                                    <p className="text-gray-700 text-lg">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Flechas de control */}
                    {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-800"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-800"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button> */}
                </div>
            </div>
        </div>
    );
}

export default CarruselClientes;
