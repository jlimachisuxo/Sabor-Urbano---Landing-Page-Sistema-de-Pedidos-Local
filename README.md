🍕 Sabor Urbano - Landing Page & Sistema de Pedidos Local
📝 Descripción

Sabor Urbano es una plataforma web desarrollada para un restaurante moderno que combina una estética visual atractiva con una funcionalidad de gestión de pedidos en tiempo real. Este proyecto fue diseñado como una solución técnica para portafolios alojados en entornos estáticos (como GitHub Pages), demostrando que es posible manejar datos dinámicos sin necesidad de un backend complejo.

El núcleo técnico del proyecto reside en la implementación de la Web Storage API, permitiendo que el formulario de pedidos capture la información del usuario y la persista en el navegador mediante LocalStorage. Esto garantiza que los pedidos se mantengan visibles incluso después de cerrar o refrescar la pestaña.
🚀 Características Principales

    Persistencia de Datos: Implementación de lógica CRUD (Crear, Leer, Eliminar) utilizando localStorage para gestionar pedidos sin base de datos.

    Interfaz Dinámica: Renderizado automático de tarjetas de pedidos en el DOM inmediatamente después de procesar el formulario.

    Diseño Responsive: Estructura fluida adaptada a móviles mediante Media Queries, asegurando que el menú y el formulario sean accesibles en cualquier dispositivo.

    Experiencia de Usuario (UX): Notificaciones de éxito mediante alertas y limpieza automática del formulario tras cada pedido para facilitar una nueva interacción.

    Navegación Interactiva: Menú de navegación con efecto "sticky", sistema de scroll suave y botón de retorno al inicio.

🛠️ Tecnologías Utilizadas

    HTML5: Estructura semántica para mejorar el SEO y la accesibilidad.

    CSS3: Diseño personalizado, animaciones de flotado para imágenes y uso de Flexbox para el layout.

    JavaScript (Vanilla): Gestión de eventos del DOM, lógica de almacenamiento y control del menú responsivo.

    Font Awesome: Iconografía para una interfaz moderna y visual.

💡 Funcionamiento del Almacenamiento

Para este proyecto, se optó por LocalStorage como la solución más recomendable para un portafolio estático:

    Captura: Se intercepta el evento submit del formulario para recolectar los datos.

    Serialización: Los datos se convierten a formato JSON para ser almacenados como strings.

    Persistencia: La información se guarda bajo la clave misPedidos, permitiendo su recuperación en cualquier sesión del navegador.
  
