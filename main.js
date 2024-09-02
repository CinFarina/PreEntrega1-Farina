const menu = ["Pizza", "Hamburguesa", "Ensalada", "Pasta"];

function verificarDisponibilidad() {
    const plato = prompt("¿Qué plato deseas verificar? (Pizza, Hamburguesa, Ensalada, Pasta)");

    if (menu.includes(plato)) {
        alert(`${plato} está disponible en el menú.`);
    } else {
        alert(`${plato} no está disponible en el menú.`);
    }
}

// Llamar a la función
verificarDisponibilidad();

function mostrarMenu() {
    let opciones = "Menú del Resto Bar:\n";

    for (let i = 0; i < menu.length; i++) {
        opciones += `${i + 1}. ${menu[i]}\n`;
    }

    return opciones;
}

function seleccionarPlato() {
    const opcionesMenu = mostrarMenu();
    const seleccion = prompt(`Elige un plato:\n${opcionesMenu}`);

   
    if (indiceSeleccionado >= 0 && indiceSeleccionado < menu) {
        alert(`Has seleccionado: ${menu[indiceSeleccionado]}`);
    } else {
        alert("Selección inválida. Por favor, elige un número del menú.");
    }
}

// Llamar a la función
seleccionarPlato();