## Proyecto CRUD de Contacts con Angular y Express + MySQL

En este proyecto se desarrollo una aplicacion CRUD que crea, lee, actualiza y elimina contactos, es decir, le da la posibilidad a los usuarios de poder gestionar sus contactos telefonicos y tener una reseña de ellos.

## Funcionalidades de gestor de contactos.

Tiene Login, y SignUp para manejar el registro y la autenticacion de los usuarios.
Tiene una API hecha en Express que me guarda los usuarios registrados, y tiene una ruta para hacer un GET de dichos usuarios. También hace GET, POST, PUT y DELELTE de los contactos que el usuario crea desde la interfax de Angular.

## Conceptos claves y fundamentos de Angular que se usaron:

Se usaron servicios para inyectar logica a los componentes, un servicio se ocupará de la auth de los usuarios, y el otro servicio se ocupara de los contactos.
Se usa navegación para el redireccionamiento entre las páginas Home, Login, SignUp y la Dashboard.

## Pasos para inicializar el proyecto:

1. Clonar este repositorio.
2. Una vez clonado en su equipo local ingrese a la carpeta Backend con: cd Backend
3. Instala los paquetes con: npm install
4. Ejecuta el servidor con: node --watch src/server.js
5. Una vez ejecutado el servidor en el puerto 8000, vaya a la carpeta Frontend con cd.. y luego cd Frontend.
6. Instala las dependencias con npm install.
7. Ejecuta el proyecto por npm start en el puerto 4200.
