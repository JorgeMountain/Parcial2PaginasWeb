async function getData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`fallo la petición: ${error}`);
  }
}

(async () => {
  try {
    const datos = await getData('https://bbd7-2800-e2-2780-2479-2417-fe6c-d24e-ecb3.ngrok-free.app/users');
    const main = document.querySelector("main");
    const contenedor = document.createElement("div");
    contenedor.setAttribute("class", "container");

    for (dato of datos) {
      const tarjeta = document.createElement("div");
      tarjeta.setAttribute("id", `user-${dato.id}`); // Cambiado para usar el id del usuario

      // Sección de imagen
      const imagen = document.createElement("div");
      imagen.setAttribute("class", "user-pic");
      const img = document.createElement("img");
      img.setAttribute("src", dato.photo);

      // Sección del nombre
      const userFirstName = document.createElement("div");
      userFirstName.setAttribute("class", "user-first-name");
      userFirstName.innerHTML = `<p>Nombre: ${dato.firstName}</p>`;

      // Sección del apellido
      const userLastName = document.createElement("div");
      userLastName.setAttribute("class", "user-last-name");
      userLastName.innerHTML = `<p>Apellido: ${dato.lastName}</p>`;

      // Sección del correo electrónico
      const userEmail = document.createElement("div");
      userEmail.setAttribute("class", "user-email");
      userEmail.innerHTML = `<p>Correo: ${dato.email}</p>`;

      // Sección del número de teléfono
      const userPhone = document.createElement("div");
      userPhone.setAttribute("class", "user-phone");
      userPhone.innerHTML = `<p>Teléfono: ${dato.phone}</p>`;

      // Sección del título del trabajo
      const userJobTitle = document.createElement("div");
      userJobTitle.setAttribute("class", "user-job-title");
      userJobTitle.innerHTML = `<p>Título del trabajo: ${dato.jobTitle}</p>`;

      // Añadir todos los elementos a la tarjeta de usuario
      imagen.appendChild(img);
      tarjeta.appendChild(imagen);
      tarjeta.appendChild(userFirstName);
      tarjeta.appendChild(userLastName);
      tarjeta.appendChild(userEmail);
      tarjeta.appendChild(userPhone);
      tarjeta.appendChild(userJobTitle);
      contenedor.appendChild(tarjeta);
    }

    main.appendChild(contenedor);
  } catch (error) {
    console.error(`fallo al obtener los datos: ${error}`);
  }
})();
