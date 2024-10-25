import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function CarruselClientes() {
    const items = [
        {
            img: `${import.meta.env.BASE_URL}calidad.png`,
            text: "Compromiso de calidad en cada servicio ofrecido.",
        },
        {
            img: `${import.meta.env.BASE_URL}cartelera.png`,
            text: "Garantía de satisfacción en cada proyecto.",
        },
        {
            img: `${import.meta.env.BASE_URL}persona.png`,
            text: "Atención personalizada y compromiso constante.",
        },
        {
            img: `${import.meta.env.BASE_URL}team.png`,
            text: "Colaboración efectiva que potencia nuestros servicios.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar al siguiente item automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
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
        <div className="py-16">
            <div className="bg-slate-950 flex items-center justify-center py-10">
                <div className="container flex flex-col gap-10 items-center px-4 md:px-20">
                    <div className=" h-100 w-full text-center">
                        <h2 className="text-2xl font-bold text-white">Nuestros Clientes</h2>
                    </div>
                    {/* Carrusel */}
                    <div className="relative">
                        <div className="relative overflow-hidden">
                            {/* Contenedor del item actual */}
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full flex justify-center items-center p-4 rounded-lg shadow-md"
                                    >
                                        <img
                                            src={item.img}
                                            alt={`Imagen ${index + 1}`}
                                            className="w-20 h-20 p-2 mr-6 object-cover bg-slate-300 rounded-md"
                                        />
                                        <p className="text-slate-300 text-lg">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Flechas de control */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full shadow-md hover:bg-slate-700"
                        >
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full shadow-md hover:bg-slate-700"
                        >
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/*Estadistica clientes */}
            <div className="bg-gradient-to-b from-white to-slate-200">
                <div className="container gap-10 flex flex-col md:flex-row justify-center items-center mx-auto px-4 md:px-20">

                    <div className="md:w-2/3 pt-10 md:py-20">
                        <h2 className="font-bold md:text-xl">100+ Clientes Satisfechos</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                            Confiamos en relaciones sólidas y duraderas, brindando una experiencia satisfactoria a cada cliente.
                        </p>
                    </div>

                    {/* Barra divisoria */}
                    <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

                    <div className="md:w-2/3 pt-10 md:py-10">
                        <h2 className="font-bold md:text-xl">200+ Proyectos Ejecutados</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                            Más de 200 proyectos completados con éxito, garantizando profesionalismo y calidad en cada etapa.
                        </p>
                    </div>

                    {/* Barra divisoria */}
                    <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

                    <div className="md:w-2/3 pt-10 md:py-10">
                        <h2 className="font-bold md:text-xl">Cobertura en 15+ Sectores</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                            Ofrecemos soluciones personalizadas para diversas industrias, adaptándonos a las necesidades específicas de cada sector.
                        </p>
                    </div>

                    {/* Barra divisoria */}
                    <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

                    <div className="md:w-2/3 pb-10 md:py-10">
                        <h2 className="font-bold md:text-xl">95% Retención de Clientes</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                            Nuestra dedicación y calidad se reflejan en un alto índice de retención de clientes año tras año.
                        </p>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default CarruselClientes;
