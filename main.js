import Api from './api.js';
import DOMHandler from './domHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
  const mainContainer = document.getElementById('userContainer');
  const domHandler = new DOMHandler(mainContainer);

  try {
    // Obtener y mostrar los usuarios
    const users = await Api.getUsers();
    domHandler.displayUsers(users);
  } catch (error) {
    domHandler.showMessage('Error al cargar los usuarios', false);
  }

  // Manejar el envío del formulario para crear o editar usuarios
  const form = document.getElementById('userForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const DataUser = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      jobTitle: form.jobTitle.value,
    };

    const userId = form.userId.value;

    try {
      if (userId) {
        // Modificar usuario existente
        await Api.updateUser(userId, DataUser);
        domHandler.showMessage('Usuario actualizado con éxito');
      } else {
        // Crear nuevo usuario
        await Api.createUser(DataUser);
        domHandler.showMessage('Usuario creado con éxito');
      }

      // Limpiar el campo userId después de la operación
      form.userId.value = '';

      // Recargar usuarios
      const users = await Api.getUsers();
      domHandler.displayUsers(users);
    } catch (error) {
      domHandler.showMessage('Error al guardar el usuario', false);
    }
  });
});
