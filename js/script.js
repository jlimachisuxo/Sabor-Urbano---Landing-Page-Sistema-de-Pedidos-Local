// para que funcione el menu de hamburguesa
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    //boton scroll
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }




    // --- Lógica para guardar en LocalStorage ---
    const orderForm = document.getElementById('orderForm');
    const contenedorPedidos = document.getElementById('contenedorPedidos');
    const btnLimpiar = document.getElementById('btnLimpiar');

    // Función para mostrar los pedidos en el HTML
    function mostrarPedidos() {
        // 1. Obtener datos de LocalStorage
        let historialPedidos = JSON.parse(localStorage.getItem('misPedidos')) || [];

        // 2. Limpiar el contenedor antes de volver a llenar
        contenedorPedidos.innerHTML = '';

        // 3. Si no hay pedidos, mostrar un mensaje
        if (historialPedidos.length === 0) {
            contenedorPedidos.innerHTML = '<p style="font-size: 1.5rem; color: #666;">No hay pedidos registrados aún.</p>';
            return;
        }

        // 4. Crear las tarjetas de pedido
        historialPedidos.forEach((pedido, index) => {
            const card = document.createElement('div');
            // Usamos estilos similares a los de tu sección 'popular' o 'speciality'
            card.style.cssText = `
            background: #fff;
            padding: 1.5rem;
            border: .1rem solid rgba(0,0,0,.1);
            border-radius: .5rem;
            width: 25rem;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.05);
        `;

            card.innerHTML = `
            <h3 style="color: red; font-size: 1.8rem;">Pedido #${index + 1}</h3>
            <p style="font-size: 1.4rem;"><strong>Cliente:</strong> ${pedido.cliente}</p>
            <p style="font-size: 1.4rem;"><strong>Platillo:</strong> ${pedido.plato}</p>
            <p style="font-size: 1.4rem;"><strong>Dirección:</strong> ${pedido.direccion}</p>
            <p style="font-size: 1.2rem; color: #999; margin-top: 1rem;">${pedido.fecha}</p>
        `;
            contenedorPedidos.appendChild(card);
        });
    }

    // Evento cuando se envía el formulario
    orderForm.onsubmit = (e) => {
        e.preventDefault();

        const nuevoPedido = {
            cliente: document.getElementById('nombre').value,
            email: document.getElementById('correo').value,
            telefono: document.getElementById('numero').value,
            plato: document.getElementById('platillo').value,
            direccion: document.getElementById('direccion').value,
            fecha: new Date().toLocaleString()
        };

        let historialPedidos = JSON.parse(localStorage.getItem('misPedidos')) || [];
        historialPedidos.push(nuevoPedido);
        localStorage.setItem('misPedidos', JSON.stringify(historialPedidos));

        alert("¡Pedido guardado con éxito!");
        orderForm.reset();
        mostrarPedidos(); // Actualizamos la lista automáticamente
    };

    // Evento para limpiar todo el historial
    btnLimpiar.onclick = () => {
        if (confirm("¿Estás seguro de que quieres borrar todos los pedidos?")) {
            localStorage.removeItem('misPedidos');
            mostrarPedidos();
        }
    };

    // Cargar los pedidos apenas abra la página
    document.addEventListener('DOMContentLoaded', mostrarPedidos);

}