import { EnvelopeIcon } from "@heroicons/react/24/solid"
import CarruselClientes from "../components/CarruselClientes";

const HomaPage = () => {

  return (
    <div className="flex flex-col pt-10">
      {/* Jumbotron Section */}
      <div className="relative h-screen w-full bg-center flex justify-center items-center">
        {/* Video */}
        <video
          className="w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}presentation.mp4`}
          muted
          autoPlay
          loop
          preload="metadata"
        />

        {/* Overlay Content */}
        <div className="absolute flex flex-col items-center text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 1)" }}
          >
            Inversiones Conti
          </h1>
          <p
            className="text-lg md:text-2xl font-light"
            style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 1)" }}
          >
            Empowering growth and innovation through strategic investments and consultancy.
          </p>
        </div>
      </div>

      {/*About us*/}
      <div className="md:my-32 text-sm md:text-base">
        <div className="bg-slate-900 text-white">
          <div className="container gap-10 flex flex-col md:flex-row justify-center items-center mx-auto px-4 md:px-20">

            <div className="md:w-1/2 pt-10 md:py-10">
              <h2 className="md:text-2xl font-bold text-center">¿Quiénes somos?</h2> <br />
              <p className="text-justify">
                En Inversiones Conti, somos una firma líder dedicada a satisfacer las principales necesidades de nuestros
                clientes a través de servicios profesionales que optimizan sus procesos administrativos, legales y fiscales.
                Nuestro objetivo es mejorar la eficiencia operativa y maximizar los resultados, permitiendo que nuestros
                clientes se enfoquen en los aspectos más estratégicos de su negocio.
              </p>
              <br />
              <p className="text-justify">
                Cada servicio que ofrecemos está a cargo de especialistas con amplia experiencia en su área, garantizando
                un desempeño impecable y una ejecución precisa para asegurar el éxito en cada proyecto.
              </p>
            </div>

            <div className="flex-shrink-0 md:w-1/2 flex justify-center items-center">
              <video
                className="w-full h-full object-cover"
                src={`${import.meta.env.BASE_URL}presentation.mp4`}
                muted
                autoPlay
                loop
              />
            </div>
          </div>
        </div>

        {/*Mision & Vision*/}
        <div className="bg-gradient-to-b from-white to-slate-200">
          <div className="container gap-10 flex flex-col md:flex-row justify-center items-center mx-auto px-4 md:px-20">

            <div className="md:w-2/3 pt-10 md:py-10">
              <h2 className="font-bold md:text-xl">Misión</h2>
              <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                Somos una organización comprometida con nuestros clientes, aportando confianza y brindándoles compromiso, eficiencia y calidad en nuestros servicios, con el fin de hacer sus procesos administrativos y financieros más rentables ofreciendo soluciones integrales de acuerdo a las necesidades de su negocio.
              </p>
            </div>

            {/* Barra divisoria */}
            <div className="hidden md:block h-40 w-[2px] bg-blue-900"></div>

            <div className="md:w-2/3 pb-10 md:py-10">
              <h2 className="font-bold md:text-xl">Visión</h2>
              <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                Crear estrategias duraderas con nuestros proveedores y clientes para ser parte fundamental de la organización, brindándoles soluciones prácticas, efectivas y un servicio personalizado para que así ellos puedan enfocar su talento y recursos en crecer su negocio.
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* Cards Section */}
      <div className="container mx-auto px-4 md:px-20 mb-32">
        <h2 className="md:text-2xl font-bold text-center pb-16">Servicios</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ofi1.jpg`}
              alt="Consultoría en Planeación y Ejecución de Proyectos"
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 md:p-6 flex justify-center">
              <h5 className="text-base font-semibold text-blue-900 text-center">
                Consultoría en Planeación y Ejecución de Proyectos
              </h5>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ofi2.jpg`}
              alt="Consultoría Jurídica"
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 md:p-6 flex justify-center">
              <h5 className="text-base font-semibold text-blue-900 text-center">
                Consultoría Jurídica
              </h5>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ofi3.jpg`}
              alt="Consultoría Comercial"
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 md:p-6 flex justify-center">
              <h5 className="text-base font-semibold text-blue-900 text-center">
                Consultoría Comercial
              </h5>
            </div>
          </div>

          {/* Card 4 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ofi4.jpg`}
              alt="Consultoría Financiera"
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 md:p-6 flex justify-center">
              <h5 className="text-base font-semibold text-blue-900 text-center">
                Consultoría Financiera
              </h5>
            </div>
          </div>

          {/* Card 5 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ofi5.jpg`}
              alt="Consultoría en Activos Digitales"
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 md:p-6 flex justify-center">
              <h5 className="text-base font-semibold text-blue-900 text-center">
                Consultoría en Activos Digitales
              </h5>
            </div>
          </div>

          {/* Card 6 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ofi6.jpg`}
              alt="Consultoría Informática"
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4 md:p-6 flex justify-center">
              <h5 className="text-base font-semibold text-blue-900 text-center">
                Consultoría Informática
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/*Nuestros Clientes */}
      <CarruselClientes></CarruselClientes>





      {/* Prefooter Section */}
      <div className="bg-black text-white w-full text-left mt-16 p-4 md:p-8 bg-repeat bg-center min-h-[200px]">
        <div className="px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-center justify-center">
              <img className="h-12 md:h-32" src={`${import.meta.env.BASE_URL}logoIC.webp`} alt="Logo" />
            </div>
            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-sm lg:text-lg font-bold">Contacto</h5>
                <a
                  href="mailto:gerencia@inversionesconti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm"
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" /> {/* Ícono de Heroicons v2 */}
                  <span>gerencia@inversionesconti.com</span>
                </a>
                <a
                  href="https://es.linkedin.com/company/conti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm"
                >
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.01a2.07 2.07 0 11-.001-4.138 2.07 2.07 0 010 4.138zm15.18 13.01h-3.56v-5.941c0-1.417-.028-3.245-1.975-3.245-1.976 0-2.278 1.543-2.278 3.14v6.045h-3.56V9h3.42v1.563h.049c.476-.9 1.636-1.846 3.368-1.846 3.602 0 4.267 2.369 4.267 5.452v6.283z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/+573104221653" // Reemplaza con el número de WhatsApp correcto
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm"
                >
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
                      <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
                    </g>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-sm lg:text-lg font-bold">Ubicación</h5>
                <div className="flex items-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Cra+43A+%233+Sur+-130,+Torre+2,+Oficina+915,+CE+Milla+de+Oro,+Medellín,+Antioquia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs md:text-sm hover:underline"
                  >
                    <svg
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z" />
                    </svg>
                    <span>Address: Cra 43A #3 Sur -130, Torre 2, Oficina 915 <br />
                      CE Milla de Oro, Medellín, Antioquia</span>

                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <footer className="bg-black text-white text-xs bottom-0 w-full text-center py-1">
        <p>&copy; 2024 Inversiones Conti. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomaPage;
