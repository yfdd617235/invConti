// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en diferentes idiomas
const resources = {
    en: {
        translation: {
            navbar: {
                whoweare: "Who We Are",
                ourcustomers: "Our Customers",
                services: "Services",
                contact: "Contact",
            },
            jumbotron: {
                message: "Driving growth and innovation through strategic investments and expert advice.",
            },
            whoarewe: {
                whoarewe: "Who are we?",
                whoarewetext1: "At Inversiones Conti, we are a leading firm dedicated to meeting the main needs of our clients through professional services that optimize their administrative, legal and tax processes. Our goal is to improve operational efficiency and maximize results, allowing our clients to focus on the most strategic aspects of their business.",
                whoarewetext2: "Each service we offer is carried out by specialists with extensive experience in their area, guaranteeing impeccable performance and precise execution to ensure success in each project.",
                mission: "Mission",
                missiontext: "We are an organization committed to our clients, providing trust and offering them commitment, efficiency and quality in our services, in order to make their administrative and financial processes more profitable by offering comprehensive solutions according to the needs of their business.",
                vision: "Vision",
                visiontext: "Create long-lasting strategies with our suppliers and clients to be a fundamental part of the organization, providing them with practical, effective solutions and personalized service so that they can focus their talent and resources on growing their business.",
            },
            services: {
                services: "Services",
                card1title: "Project Planning and Execution Consulting",
                card1text: "We help plan and execute projects from the initial analysis to their completion, ensuring success at every stage through personalized strategies and practical solutions.",
                card2title: "Legal Consulting",
                card2text: "We offer specialized legal advice for companies and individuals, supporting informed decision-making, risk management, and compliance with current regulations.",
                card3title: "Commercial Consulting",
                card3text: "We develop commercial strategies that allow our clients to identify and seize market opportunities, improve their sales, and strengthen their position in the industry.",
                card4title: "Financial Consulting",
                card4text: "We provide comprehensive financial advice to optimize resources, increase profitability, and help our clients make informed and sustainable economic decisions.",
                card5title: "Digital Assets Consulting",
                card5text: "We advise on managing and expanding digital assets, facilitating an effective and secure presence in the digital environment, and making the most of new technologies and trends.",
                card6title: "IT Consulting",
                card6text: "We offer advanced technological solutions to optimize internal processes, improve operational efficiency, and support the digital transformation of companies.",
            },
            ourcustomers: {
                title: "Our Clients",
                carruseltext1: "Commitment to quality in every service offered.",
                carruseltext2: "Satisfaction guarantee in every project.",
                carruseltext3: "Personalized attention and constant commitment.",
                carruseltext4: "Effective collaboration that enhances our services.",
            },
            

        },
    },
    es: {
        translation: {
            navbar: {
                whoweare: "Quiénes Somos",
                ourcustomers: "Nuestros Clientes",
                services: "Servicios",
                contact: "Contacto",
            },
            jumbotron: {
                message: "Impulsando el crecimiento y la innovación a través de inversiones estratégicas y asesoría experta.",
            },
            whoarewe: {
                whoarewe: "¿Quiénes somos?",
                whoarewetext1: "En Inversiones Conti, somos una firma líder dedicada a satisfacer las principales necesidades de nuestros clientes a través de servicios profesionales que optimizan sus procesos administrativos, legales y fiscales. Nuestro objetivo es mejorar la eficiencia operativa y maximizar los resultados, permitiendo que nuestros clientes se enfoquen en los aspectos más estratégicos de su negocio.",
                whoarewetext2: "Cada servicio que ofrecemos está a cargo de especialistas con amplia experiencia en su área, garantizando un desempeño impecable y una ejecución precisa para asegurar el éxito en cada proyecto.",
                mission: "Misión",
                missiontext: "Somos una organización comprometida con nuestros clientes, aportando confianza y brindándoles compromiso, eficiencia y calidad en nuestros servicios, con el fin de hacer sus procesos administrativos y financieros más rentables ofreciendo soluciones integrales de acuerdo a las necesidades de su negocio.",
                vision: "Visión",
                visiontext: "Crear estrategias duraderas con nuestros proveedores y clientes para ser parte fundamental de la organización, brindándoles soluciones prácticas, efectivas y un servicio personalizado para que así ellos puedan enfocar su talento y recursos en crecer su negocio.",
            },
            services: {
                services: "Servicios",
                card1title: "Consultoría en Planeación y Ejecución de Proyectos",
                card1text: "Ayudamos a planificar y ejecutar proyectos desde el análisis inicial hasta su cierre, asegurando el éxito en cada etapa mediante estrategias personalizadas y soluciones prácticas.",
                card2title: "Consultoría Jurídica",
                card2text: "Ofrecemos asesoramiento jurídico especializado para empresas y particulares, apoyando en la toma de decisiones informadas, la gestión de riesgos y el cumplimiento de normativas vigentes.",
                card3title: "Consultoría Comercial",
                card3text: "Desarrollamos estrategias comerciales que permiten a nuestros clientes identificar y aprovechar oportunidades de mercado, mejorar sus ventas y consolidar su posición en el sector.",
                card4title: "Consultoría Financiera",
                card4text: "Brindamos asesoramiento financiero integral para optimizar recursos, aumentar la rentabilidad y ayudar a nuestros clientes a tomar decisiones económicas informadas y sostenibles.",
                card5title: "Consultoría en Activos Digitales",
                card5text: "Asesoramos en la gestión y expansión de activos digitales, facilitando una presencia efectiva y segura en el entorno digital, aprovechando al máximo las nuevas tecnologías y tendencias.",
                card6title: "Consultoría Informática",
                card6text: "Ofrecemos soluciones tecnológicas avanzadas para optimizar los procesos internos, mejorar la eficiencia operativa y apoyar la transformación digital de las empresas.",
            },
            ourcustomers: {
                title: "Nuestros Clientes",
                carruseltext1: "Compromiso de calidad en cada servicio ofrecido.",
                carruseltext2: "Garantía de satisfacción en cada proyecto.",
                carruseltext3: "Atención personalizada y compromiso constante.",
                carruseltext4: "Colaboración efectiva que potencia nuestros servicios.",
            },
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Idioma predeterminado
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
