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

          <div className="md:w-2/3 pt-10 md:py-10">
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

          <div className="flex-shrink-0 md:w-1/3 flex justify-center items-center">
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
      <div className="bg-slate-100">
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
      <div className="container mx-auto px-4 md:px-40 my-16">
        <h2 className="md:text-2xl font-bold text-center pb-16">Servicios</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="h-full shadow-md rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}global.jpg`}
              alt="Consultoría en Planeación y Ejecución de Proyectos"
              className="w-full h-48 object-cover rounded-t-lg"
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
              src={`${import.meta.env.BASE_URL}lightbulb.jpg`}
              alt="Consultoría Jurídica"
              className="w-full h-48 object-cover rounded-t-lg"
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
              src={`${import.meta.env.BASE_URL}project.jpg`}
              alt="Consultoría Comercial"
              className="w-full h-48 object-cover rounded-t-lg"
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
              src={`${import.meta.env.BASE_URL}finance.jpg`}
              alt="Consultoría Financiera"
              className="w-full h-48 object-cover rounded-t-lg"
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
              src={`${import.meta.env.BASE_URL}digital.jpg`}
              alt="Consultoría en Activos Digitales"
              className="w-full h-48 object-cover rounded-t-lg"
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
              src={`${import.meta.env.BASE_URL}it.jpg`}
              alt="Consultoría Informática"
              className="w-full h-48 object-cover rounded-t-lg"
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
      <div className="bg-black text-white w-full text-left mt-16 p-4 md:p-8 bg-repeat bg-center min-h-[400px]">
        <div className="px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-center justify-center">
              <img className="h-12 md:h-32" src={`${import.meta.env.BASE_URL}logoIC.webp`} alt="Logo" />
            </div>
            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-sm lg:text-lg font-bold">Services</h5> <br />
                <p className="text-xs md:text-sm ">- Trading and financial investments</p>
                <p className="text-xs md:text-sm ">- Project evaluation, structuring and management</p>
                <p className="text-xs md:text-sm ">- International business consulting</p>
                <p className="text-xs md:text-sm ">- Software and Artificial Intelligence development</p>
              </div>
            </div>
            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-sm lg:text-lg font-bold">Contact Us</h5> <br />
                <p className="text-xs md:text-sm ">
                  Address: Cra 42 C #3 Sur 81, Torre 1, Piso 15 <br />
                  CE Milla de Oro, Medellín Colombia
                </p>
                <a
                  href="mailto:director@panamericanprivateinvestments.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm"
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" /> {/* Ícono de Heroicons v2 */}
                  <span>director@panamericanprivateinvestments.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/panamerican-private-investments/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm">
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.01a2.07 2.07 0 11-.001-4.138 2.07 2.07 0 010 4.138zm15.18 13.01h-3.56v-5.941c0-1.417-.028-3.245-1.975-3.245-1.976 0-2.278 1.543-2.278 3.14v6.045h-3.56V9h3.42v1.563h.049c.476-.9 1.636-1.846 3.368-1.846 3.602 0 4.267 2.369 4.267 5.452v6.283z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
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
