export default class DOMHandler {
  constructor(container) {
    this.container = container;
  }

  displayUsers(users) {
    this.container.innerHTML = ''; // Limpiar el contenedor
    users.forEach((user, index) => {
      const card = document.createElement('article');
      card.setAttribute('id', `user-${user.id}`);
      card.setAttribute('class', `user-card user-card-${index % 2 === 0 ? 'even' : 'odd'}`); // Asignar clases diferenciadas

      // Sección de imagen
      const imageSection = document.createElement('div');
      imageSection.setAttribute('class', 'user-pic');
      const img = document.createElement('img');
      img.setAttribute('src', user.photo);
      img.setAttribute('alt', `${user.firstName} ${user.lastName}`);
      imageSection.appendChild(img);

      // Sección del nombre
      const userName = document.createElement('div');
      userName.setAttribute('class', 'user-name');
      userName.innerHTML = `<p>Nombre: ${user.firstName}</p>`;

      // Sección del ID
      const userId = document.createElement('div');
      userId.setAttribute('class', 'user-id');
      userId.innerHTML = `<p>ID: ${user.id}</p>`;

      // Sección del apellido
      const userLastName = document.createElement('div');
      userLastName.setAttribute('class', 'user-last-name');
      userLastName.innerHTML = `<p>Apellido: ${user.lastName}</p>`;

      // Sección del correo electrónico
      const userEmail = document.createElement('div');
      userEmail.setAttribute('class', 'user-email');
      userEmail.innerHTML = `<p>Correo: ${user.email}</p>`;

      // Sección del número de teléfono
      const userPhone = document.createElement('div');
      userPhone.setAttribute('class', 'user-phone');
      userPhone.innerHTML = `<p>Teléfono: ${user.phone}</p>`;

      // Sección del título del trabajo
      const userJobTitle = document.createElement('div');
      userJobTitle.setAttribute('class', 'user-job-title');
      userJobTitle.innerHTML = `<p>Título del trabajo: ${user.jobTitle}</p>`;

      // Añadir todos los elementos a la tarjeta de usuario
      card.appendChild(imageSection);
      card.appendChild(userId);
      card.appendChild(userName);
      card.appendChild(userLastName);
      card.appendChild(userEmail);
      card.appendChild(userPhone);
      card.appendChild(userJobTitle);

      // Evento para editar usuario al hacer clic
      card.addEventListener('click', () => {
        this.fillEditForm(user);
      });

      // Botón para editar usuario
      const editButton = document.createElement('button');
      editButton.innerText = 'Editar Usuario';
      editButton.addEventListener('click', (event) => {
        event.stopPropagation();
        this.fillEditForm(user);
      });
      card.appendChild(editButton);

      this.container.appendChild(card);
    });
  }

  fillEditForm(user) {
    // Llenar el formulario con la información del usuario
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('jobTitle').value = user.jobTitle;
    document.getElementById('userId').value = user.id;
  }

  showMessage(message, isSuccess = true) {
    const messageBox = document.createElement('div');
    messageBox.setAttribute('class', isSuccess ? 'success-message' : 'error-message');
    messageBox.innerText = message;
    document.body.appendChild(messageBox);

    setTimeout(() => {
      messageBox.remove();
    }, 3000);
  }
}

// Agregar referencia a axios desde el CDN
if (typeof axios === 'undefined') {
  console.error('Axios no está definido. Asegúrate de incluir el script de Axios en tu HTML.');
}