export const services = [
    {
        id: 'mensajeria-y-despachos-express',
        label: 'LOGÍSTICA URBANA Y MENSAJERÍA',
        title: 'Mensajería',
        description: 'Envíos ágiles, trámites y gestiones corporativas con seguimiento oportuno.',
        fullDescription: 'Optimiza la gestión de tus envíos y trámites administrativos con nuestro servicio express. Contamos con personal calificado que garantiza puntualidad y seguridad, liberando tus recursos internos para que te concentres en tu negocio.',
        features: [
            {
                title: 'Gestiones administrativas',
                description: 'Compras y gestiones administrativas. Gestiones y trámites bancarios.',
            },
            {
                title: 'Trámites especializados',
                description: 'Tramitación de licencias médicas. Trámites notariales y aduaneros.',
            },
            {
                title: 'Retiros y despachos',
                description: 'Retiro y despacho de productos, documentos y paquetes.',
            },
            {
                title: 'Condiciones del servicio',
                description: 'Tarifas según distancia y tiempos de espera.',
            },
        ],
        specifications: [
            {
                label: 'Dimensiones máximas del paquete',
                value: '40 x 40 cm',
            },
            {
                label: 'Peso máximo del paquete',
                value: '5 kg',
            },
        ],
        image: '/images/our-services/mensajeria-despachos-express.webp',
        imageAlt: 'Repartidor en motocicleta realizando servicios de mensajería y despachos express.',
        detailImage: '/images/service-details/mensajeria-corporativa-motocicleta.webp',
        detailImageAlt: 'Repartidor junto a su motocicleta entregando un paquete a un hombre frente a un edificio de oficinas.',
    },
    {
        id: 'transporte-de-pasajeros',
        label: 'Movilidad corporativa y traslados',
        title: 'Transporte de pasajeros',
        description: 'Traslados privados para colaboradores y ejecutivos, incluyendo rutas y acercamientos habituales.',
        fullDescription: 'Gestionamos el traslado privado de colaboradores y ejecutivos mediante vehículos y vans adaptados a cada requerimiento. Somos especialistas en acercamientos habituales, traslados en distintos horarios y logística para eventos corporativos, planificando rutas eficientes para que tu operación avance sin contratiempos.',
        features: [
            {
                title: 'Transporte corporativo',
                description: 'Transporte privado de pasajeros. Traslado de ejecutivos. Transporte de colaboradores.',
            },
            {
                title: 'Eventos y planificación',
                description: 'Traslados para eventos comerciales y corporativos. Planificación y optimización de rutas.',
            },
            {
                title: 'Vehículos y vans',
                description: 'Asignación de vehículos según la cantidad de pasajeros. Servicio de vans con tarifa fija dentro de la Región Metropolitana.',
            },
            {
                title: 'Cotización del servicio',
                description: 'Cotizaciones para vehículos según distancia, tiempos de traslado, autopistas y tiempos de espera.',
            },
        ],
        specifications: [],
        image: '/images/our-services/transporte-pasajeros.webp',
        imageAlt: 'Pasajeros utilizando un servicio de transporte privado frente a un edificio corporativo.',
        detailImage: '/images/service-details/transporte-privado-ejecutivos-colaboradores.webp',
        detailImageAlt: 'Conductor recibiendo a dos pasajeros junto a la puerta abierta de una van.',
    },
    {
        id: 'fletes-y-despachos-express',
        label: 'Logística y distribución B2B',
        title: 'Fletes',
        description: 'Carga, distribución de productos, mobiliario e insumos con puntualidad y respaldo.',
        fullDescription: 'Resolvemos el traslado de carga, insumos y mercadería de tu empresa con vehículos utilitarios y personal calificado. Nos adaptamos a los volúmenes, rutas y tiempos de cada operación para que tu equipo se enfoque en el core del negocio.',
        features: [
            {
                title: 'Carga e insumos',
                description: 'Traslado de muebles y mobiliario. Transporte de insumos para empresas.',
            },
            {
                title: 'Retiros y despachos',
                description: 'Retiro y despacho de productos. Despachos express para clientes críticos.',
            },
            {
                title: 'Vehículos y apoyo operativo',
                description: 'Transporte mediante vehículos adecuados al tamaño de la carga. Posibilidad de incorporar personal de apoyo para carga y descarga.',
            },
            {
                title: 'Cotización del servicio',
                description: 'Cotizaciones según distancia, volumen y requerimientos del servicio.',
            },
        ],
        specifications: [
            {
                label: 'Vehículo de carga',
                value: 'Tipo Mercedes-Benz Vito',
            },
        ],
        image: '/images/our-services/fletes-despachos-express.webp',
        imageAlt: 'Personal realizando la carga de productos y mobiliario en un vehículo de transporte.',
        detailImage: '/images/service-details/transporte-carga-logistica-empresarial.webp',
        detailImageAlt: 'Dos trabajadores trasladando cajas entre un carro de carga y un furgón frente a un edificio de oficinas.',
    },
    {
        id: 'catering',
        label: 'Catering corporativo',
        title: 'Catering',
        description: 'Soluciones gastronómicas para reuniones, equipos de trabajo y jornadas corporativas.',
        fullDescription: 'Resolvemos la alimentación de tus equipos, reuniones y jornadas operativas con puntualidad, presentación impecable y abastecimiento continuo. Nos encargamos de la logística gastronómica para que tú te concentres en tus objetivos de negocio.',
        features: [
            {
                title: 'Coffee breaks y reuniones',
                description: 'Montaje completo con insumos dulces, salados y bebestibles para capacitaciones, directorios y encuentros ejecutivos.',
            },
            {
                title: 'Jornadas operativas e inventarios',
                description: 'Colaciones, desayunos y almuerzos en terreno diseñados para turnos extensos, cierres de tienda o jornadas de inventario.',
            },
            {
                title: 'Almuerzos, cenas y asados',
                description: 'Servicios gastronómicos a medida para celebraciones internas, hitos de equipo y actividades de camaradería',
            },
            {
                title: 'Abastecimiento y montaje integral',
                description: 'Gestión de insumos, menaje, montaje y atención en el lugar, con propuestas adaptadas al número de asistentes.',
            },
        ],
        specifications: [],
        // Fotografías provisionales compartidas con Producción de eventos.
        image: '/images/our-services/catering-produccion-eventos.webp',
        imageAlt: 'Montaje de mesas y espacios de alimentación para un evento corporativo al aire libre.',
        detailImage: '/images/service-details/catering-eventos-corporativos.webp',
        detailImageAlt: 'Personal de catering preparando una mesa de bocados mientras los asistentes conversan en una terraza.',
    },
    {
        id: 'produccion-de-eventos',
        label: 'Producción y logística de eventos',
        title: 'Producción de eventos',
        description: 'Organización y soporte logístico para eventos a pequeña, mediana y gran escala.',
        fullDescription: 'Planificamos, coordinamos y ejecutamos eventos corporativos y comerciales de principio a fin. Asumimos toda la carga operativa, técnica y logística para garantizar experiencias memorables sin desgastar a tu equipo interno.',
        features: [
            {
                title: 'Eventos y celebraciones',
                description: 'Producción de eventos corporativos. Fiestas y celebraciones empresariales.',
            },
            {
                title: 'Organización y soporte logístico',
                description: 'Organización y soporte logístico para eventos a pequeña, mediana y gran escala.',
            },
            {
                title: 'Cotización del servicio',
                description: 'Cotizaciones personalizadas según los requerimientos del evento.',
            },
        ],
        specifications: [],
        // Fotografías provisionales compartidas con Catering.
        image: '/images/our-services/catering-produccion-eventos.webp',
        imageAlt: 'Montaje de mesas y espacios de alimentación para un evento corporativo al aire libre.',
        detailImage: '/images/service-details/catering-eventos-corporativos.webp',
        detailImageAlt: 'Personal de catering preparando una mesa de bocados mientras los asistentes conversan en una terraza.',
    },
];
