import { conectaAPI } from "./conectaAPI.js";

export async function asignarFuncionEliminar() {
    const lista = document.querySelector("[data-lista]");
    lista.addEventListener("click", async (e) => {
        if (e.target.classList.contains("eliminar")) {
            const id = e.target.dataset.id;
            try {
                await conectaAPI.eliminarProducto(id);
                e.target.closest(".tarjeta").remove();
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
            }
        }
    });
}

asignarFuncionEliminar();