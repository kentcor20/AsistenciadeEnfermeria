// public/js/script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enfermeriaForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;

        try {
            const response = await fetch("/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, edad }),
            });

            if (response.ok) {
                alert("Registro exitoso");
            } else {
                alert("Error en el registro");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
